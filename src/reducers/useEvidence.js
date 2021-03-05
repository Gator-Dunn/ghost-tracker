import React from "react";
import { INITIAL_STATE } from "./constants";

export const actionTypes = {
  add: {
    confirmed: "ADD_CONFIRMED_EVIDENCE",
    excluded: "ADD_EXCLUDED_EVIDENCE",
    unconfirmed: "ADD_UNCONFIRMED_EVIDENCE",
  },
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

      const alreadySet = confirmed.every((e) => state.confirmed.includes(e));

      if (alreadySet) {
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
      const validEvidence = [
        ...new Set(
          state.ghosts
            .filter((ghost) =>
              state.confirmed.every((e) => ghost.evidence.includes(e)) &&
              state.excluded.every((e) => !ghost.evidence.includes(e))
            )
            .map((ghost) => ghost.evidence)
            .flat()
        ),
      ];

      if (validEvidence.length === 0) {
        return {
          ...state,
          validGhosts: [],
        }
      }

      const validGhosts = [
        state.ghosts
          .filter((ghost) =>
            state.confirmed.every((e) => ghost.evidence.includes(e))
          )
          .map((ghost) => ghost.name),
      ].flat();

      const payloadExcluded = (e) =>
        e === payload && state.excluded.includes(payload);

      const excluded = state.all.filter(
        (e) => payloadExcluded(e) || !validEvidence.includes(e) || state.excluded.includes(e)
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

export const useEvidence = () => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE.evidence);

  const incrementStatus = (payload) => {
    if (state.confirmed.includes(payload)) {
      dispatch({ payload, type: actionTypes.add.excluded });
    }

    if (state.excluded.includes(payload)) {
      dispatch({ payload, type: actionTypes.add.unconfirmed });
    }

    if (state.unconfirmed.includes(payload)) {
      dispatch({ payload, type: actionTypes.add.confirmed });
    }

    dispatch({ payload, type: actionTypes.validate });
  };

  const toggleGhostEvidence = (payload) => {
    dispatch({ payload, type: actionTypes.toggleGhostEvidence });
    dispatch({ payload, type: actionTypes.validate });
  };

  const resetEvidence = () => dispatch({ type: actionTypes.reset });

  return {
    incrementStatus,
    resetEvidence,
    state,
    toggleGhostEvidence,
  };
};
