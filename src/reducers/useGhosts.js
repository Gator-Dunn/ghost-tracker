import React from "react";
import { INITIAL_STATE } from "./constants";

export const actionTypes = {
  filter: "FILTER_GHOSTS_BY_EVIDENCE",
  reset: "RESET_GHOSTS",
  toggle: "TOGGLE_GHOST_STATUS",
};

export const reducer = (state = INITIAL_STATE.ghosts, { type, payload }) => {
  switch (type) {
    case actionTypes.filter: {
      const valid = state.all.filter((ghost) => payload.includes(ghost));
      return {
        ...state,
        valid,
        invalid: state.all.filter((ghost) => !valid.includes(ghost)),
      };
    }
    case actionTypes.reset: {
      return INITIAL_STATE.ghosts;
    }
    case actionTypes.toggle: {
      if (state.invalid.includes(payload)) {
        return {
          ...state,
          valid: [payload],
          invalid: state.all.filter((g) => g !== payload),
        };
      }
      if (state.valid.length === 1) {
        return {
          ...state,
          valid: state.all,
          invalid: [],
        };
      }
      return {
        ...state,
        valid: [payload],
        invalid: state.all.filter((g) => g !== payload),
      };
    }
    default: {
      return state;
    }
  }
};

export const useGhosts = () => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE.ghosts);

  const isValid = (payload) => state.valid.includes(payload);

  const toggleGhost = (payload) =>
    dispatch({ payload, type: actionTypes.toggle });

  const filterGhosts = (payload) =>
    dispatch({ payload, type: actionTypes.filter });

  const resetGhosts = () => dispatch({ type: actionTypes.reset });

  return {
    dispatch,
    filterGhosts,
    isValid,
    resetGhosts,
    state,
    toggleGhost,
  };
};
