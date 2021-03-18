import React from "react";
import { INITIAL_STATE } from "./constants";

export const actionTypes = {
  add: {
    confirmed: "ADD_CONFIRMED_EVIDENCE",
    excluded: "ADD_EXCLUDED_EVIDENCE",
    unconfirmed: "ADD_UNCONFIRMED_EVIDENCE",
  },
  confirm: "CONFIRM_EVIDENCE",
  exclude: "EXCLUDE_EVIDENCE",
  reset: "RESET_EVIDENCE",
  toggleGhostEvidence: "TOGGLE_GHOST_EVIDENCE",
  validate: "VALIDATE_ALL_EVIDENCE",
};

const addWithoutDuplicates = (existingArray, newItem) => [
  ...new Set([...existingArray, newItem]),
];

export const reducer = (state = INITIAL_STATE.evidence, { type, payload }) => {
  switch (type) {
    case actionTypes.add.confirmed: {
      return {
        ...state,
        confirmed: addWithoutDuplicates(state.confirmed, payload),
        excluded: state.excluded.filter((e) => e !== payload),
        unconfirmed: state.unconfirmed.filter((e) => e !== payload),
      };
    }
    case actionTypes.exclude: {
      const isExcluded = state.excluded.includes(payload);
      const excluded = !isExcluded
        ? addWithoutDuplicates(state.excluded, payload)
        : state.excluded.filter((e) => e !== payload);

      const unconfirmed = !isExcluded
        ? state.unconfirmed.filter((e) => e !== payload)
        : addWithoutDuplicates(state.unconfirmed, payload);
      return {
        ...state,
        confirmed: state.confirmed.filter((e) => e !== payload),
        excluded,
        unconfirmed,
      };
    }
    case actionTypes.confirm: {
      const isConfirmed = state.confirmed.includes(payload);
      const confirmed = !isConfirmed
        ? addWithoutDuplicates(state.confirmed, payload)
        : state.confirmed.filter((e) => e !== payload);

      const unconfirmed = !isConfirmed
        ? state.unconfirmed.filter((e) => e !== payload)
        : addWithoutDuplicates(state.unconfirmed, payload);

      return {
        ...state,
        confirmed,
        excluded: state.excluded.filter((e) => e !== payload),
        unconfirmed,
      };
    }
    case actionTypes.add.excluded: {
      return {
        ...state,
        confirmed: state.confirmed.filter((e) => e !== payload),
        excluded: addWithoutDuplicates(state.excluded, payload),
        unconfirmed: state.unconfirmed.filter((e) => e !== payload),
      };
    }
    case actionTypes.add.unconfirmed: {
      return {
        ...state,
        confirmed: state.confirmed.filter((e) => e !== payload),
        excluded: state.excluded.filter((e) => e !== payload),
        unconfirmed: addWithoutDuplicates(state.unconfirmed, payload),
      };
    }
    case actionTypes.reset: {
      return INITIAL_STATE.evidence;
    }
    case actionTypes.toggleGhostEvidence: {
      const confirmed = state.ghosts
        .filter((ghost) => ghost.name === payload.ghostName)
        .map((ghost) => ghost.evidence)
        .flat();

      if (
        state.validGhosts.length === 1 &&
        state.validGhosts.includes(payload.ghostName)
      ) {
        return {
          ...state,
          confirmed: [],
          excluded: [],
          unconfirmed: state.all,
        };
      }

      const excluded = state.all.filter((e) => !confirmed.includes(e));

      return {
        ...state,
        confirmed,
        excluded,
        unconfirmed: [],
      };
    }
    case actionTypes.validate: {
      let validEvidence = [];
      let validGhosts = [];
      if (
        state.unconfirmed.length === 1 &&
        state.unconfirmed.includes(payload)
      ) {
        validEvidence = [
          ...new Set(
            state.ghosts
              .filter((ghost) =>
                state.confirmed.every((e) => ghost.evidence.includes(e))
              )
              .map((ghost) => ghost.evidence)
              .flat()
          ),
        ];
        validGhosts = [
          state.ghosts
            .filter((ghost) =>
              state.confirmed.every((e) => ghost.evidence.includes(e))
            )
            .map((ghost) => ghost.name),
        ].flat();
      } else {
        validEvidence = [
          ...new Set(
            state.ghosts
              .filter(
                (ghost) =>
                  state.confirmed.every((e) => ghost.evidence.includes(e)) &&
                  state.excluded.every((e) => !ghost.evidence.includes(e))
              )
              .map((ghost) => ghost.evidence)
              .flat()
          ),
        ];
        validGhosts = [
          state.ghosts
            .filter(
              (ghost) =>
                state.confirmed.every((e) => ghost.evidence.includes(e)) &&
                state.excluded.every((e) => !ghost.evidence.includes(e))
            )
            .map((ghost) => ghost.name),
        ].flat();
      }

      const payloadExcluded = (e) =>
        e === payload && state.excluded.includes(payload);

      if (validEvidence.length === 0) {
        return {
          ...state,
          validGhosts: [],
        };
      }

      const excluded = state.all.filter(
        (e) => payloadExcluded(e) || !validEvidence.includes(e)
      );

      const unconfirmed = state.all.filter(
        (e) =>
          e.name !== payload &&
          !state.confirmed.includes(e) &&
          !excluded.includes(e)
      );
      const confirmed = state.all.filter(
        (e) => !unconfirmed.includes(e) && !excluded.includes(e)
      );

      return {
        ...state,
        excluded,
        unconfirmed,
        confirmed,
        validGhosts,
      };
    }
    default: {
      return state;
    }
  }
};

const useEvidence = () => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE.evidence);

  const toggleGhostEvidence = (payload) => {
    dispatch({ payload, type: actionTypes.toggleGhostEvidence });
    dispatch({ payload, type: actionTypes.validate });
  };

  const resetEvidence = () => dispatch({ type: actionTypes.reset });

  const toggleExclude = (payload) => {
    dispatch({ type: actionTypes.exclude, payload });
    dispatch({ payload, type: actionTypes.validate });
  };

  const toggleConfirm = (payload) => {
    dispatch({ type: actionTypes.confirm, payload });
    dispatch({ payload, type: actionTypes.validate });
  };

  return {
    toggleConfirm,
    toggleExclude,
    resetEvidence,
    state,
    toggleGhostEvidence,
  };
};

export default useEvidence;
