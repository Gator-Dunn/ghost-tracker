import React from "react";

const actionTypes = {
  disableItem: "DISABLE_ITEM",
  disableSpinning: "DISABLE_SPINNING",
  enableSpinning: "ENABLE_SPINNING",
  hideEditItems: "HIDE_EDIT_ITEMS",
  reset: "RESET_ITEMS",
  set: "SET_ITEM",
  setAndRemove: "SET_ITEM_AND_REMOVE",
  showEditItems: "SHOW_EDIT_ITEMS",
  toggleEditItems: "TOGGLE_EDIT_ITEMS",
  toggleItem: "TOGGLE_ITEM",
};

export const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.disableSpinning: {
      return {
        ...state,
        spinning: false,
      };
    }
    case actionTypes.enableSpinning: {
      return {
        ...state,
        spinning: true,
      };
    }
    case actionTypes.reset: {
      return {
        ...state,
        items: state.original.items,
        checkboxes: state.original.checkboxes,
      }
    }
    case actionTypes.set: {
      return {
        ...state,
        selected: payload,
      };
    }
    case actionTypes.setAndRemove: {
      let items = state.items.filter((i) => i.id !== payload.id);
      let checkboxes = {
        ...state.checkboxes,
        [payload.id]: false,
      }
      if (items.length === 0) {
        items = state.original.items;
        checkboxes = state.original.checkboxes;
      }
      return {
        ...state,
        checkboxes,
        items,
        selected: payload,
      };
    }
    case actionTypes.toggleEditItems: {
      return {
        ...state,
        showEditItems: !state.showEditItems,
      };
    }
    case actionTypes.showEditItems: {
      return {
        ...state,
        showEditItems: true,
      };
    }
    case actionTypes.hideEditItems: {
      return {
        ...state,
        showEditItems: false,
      };
    }
    case actionTypes.disableItem: {
      return {
        ...state,
        items: state.items.filter((i) => i.id !== payload),
        checkboxes: {
          ...state.checkboxes,
          [payload]: false,
        }
      };
    }
    case actionTypes.toggleItem: {
      const itemAvailable = state.items.find((i) => i.id === payload);
      if (itemAvailable) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== payload),
          checkboxes: {
            ...state.checkboxes,
            [payload]: false,
          }
        }
      }
      const item = state.original.items.filter((i) => i.id === payload);
      return {
        ...state,
        items: [
          ...state.items,
          ...item,
        ],
        checkboxes: {
          ...state.checkboxes,
          [payload]: true,
        }
      }
    }
    default:
      return state;
  }
};
const defaultInitialState = {
  items: [],
}
const useRandomizer = (initialState = defaultInitialState) => {
  const checkboxes = initialState.items.reduce(
    (checks, check) => ({ ...checks, [check.id]: true }),
    {}
  );
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialState,
    checkboxes,
    original: {
      ...initialState,
      checkboxes,
    }
  });

  const getRandomItem = ({ removeDuplicate = true } = {}) => {
    if (state.spinning) return;

    dispatch({
      type: actionTypes.enableSpinning,
    });
    let count = 0;
    const spinner = setInterval(() => {
      if (count < state.original.items.length) {
        dispatch({
          type: actionTypes.set,
          payload: state.original.items[count],
        });
        count++;
      } else {
        const randomItemIndex = Math.floor(Math.random() * state.items.length);

        dispatch({
          type: removeDuplicate ? actionTypes.setAndRemove : actionTypes.set,
          payload: state.items[randomItemIndex],
        });

        clearInterval(spinner);
        dispatch({
          type: actionTypes.disableSpinning,
        });
      }
    }, state.speed || 55);
  };

  const toggleEditItems = () =>
    dispatch({
      type: actionTypes.toggleEditItems,
    });

  const disableItem = (payload) => {
    dispatch({
      type: actionTypes.disableItem,
      payload,
    });
  };

  const toggleItem = (payload) =>
    dispatch({
      type: actionTypes.toggleItem,
      payload,
    });

  const reset = () => dispatch({type: actionTypes.reset});

  return {
    disableItem,
    getRandomItem,
    reset,
    state,
    toggleEditItems,
    toggleItem,
  };
};

export default useRandomizer;
