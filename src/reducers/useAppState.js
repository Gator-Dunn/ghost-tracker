import React from "react";
import { INITIAL_STATE } from "./constants";

export const actionTypes = {
  setActive: "SET_APP_STATE_SECTION_ACTIVE",
  setActiveRandomizer: "SET_ACTIVE_RANDOMIZER",
  updateSize: "UPDATE_SCREEN_SIZE",
};

export const reducer = (state = INITIAL_STATE.appState, { type, payload }) => {
  switch (type) {
    case actionTypes.setActive: {
      return {
        ...state,
        evidence: {
          ...state.evidence,
          visible: false,
        },
        randomizer: {
          ...state.randomizer,
          visible: false,
        },
        [payload]: {
          ...state[payload],
          visible: true,
        },
      };
    }
    case actionTypes.setActiveRandomizer: {
      return {
        ...state,
        randomizer: {
          ...state.randomizer,
          activeSection: payload,
        },
      };
    }
    case actionTypes.updateSize: {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};

const useAppState = () => {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE.appState);

  const setActive = (payload) =>
    dispatch({ type: actionTypes.setActive, payload });

  const isActive = (payload) => state[payload].visible;

  const updateSize = (payload) =>
    dispatch({ type: actionTypes.updateSize, payload });

  const setActiveRandomizer = (payload) =>
    dispatch({ type: actionTypes.setActiveRandomizer, payload });

  React.useEffect(() => {
    function handleResize() {
      updateSize({
        isDesktopSized: window.innerWidth > 768,
        isTabletSized: window.innerWidth <= 768 && window.innerWidth > 411,
        isCellPhoneSized: window.innerWidth <= 411,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isActive,
    setActive,
    setActiveRandomizer,
    state,
    updateSize,
  };
};

export default useAppState;
