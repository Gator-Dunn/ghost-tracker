import React from "react";
import { INITIAL_STATE } from "./constants";

const actionTypes = {
  applyFilters: "APPLY_ITEM_FILTERS",
  loading: "SET_LOADING_STATE",
  toggleFilter: "TOGGLE_ITEM_FILTER",
  disableItem: "DISABLE_ITEM",
  disableSpinning: "DISABLE_SPINNING",
  enableSpinning: "ENABLE_SPINNING",
  hideEditItems: "HIDE_EDIT_ITEMS",
  reset: "RESET_ITEMS",
  removeItem: "REMOVE_ITEM",
  set: "SET_ITEM",
  uncheckItem: "UNCHECK_ITEM",
  showEditItems: "SHOW_EDIT_ITEMS",
  toggleEditItems: "TOGGLE_EDIT_ITEMS",
  toggleItem: "TOGGLE_ITEM",
};

const filterItems = (state) =>
  state.original.items.filter((i) => i.types.every((t) => state.filters[t]));

export const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.applyFilters: {
      // const items = filterItems(state).sort((a, b) =>
      //   a.removed === b.removed ? 0 : a.removed ? -1 : 1
      // );
      const items = state.items.map((item) => ({
        ...item,
        removed: !item.types.some((t) => state.filters[t]),
      }));
      console.log("applyFilters", items);
      return {
        ...state,
        items,
        loading: false,
      };
    }
    case actionTypes.loading: {
      return {
        ...state,
        loading: payload,
      };
    }
    case actionTypes.toggleFilter: {
      return {
        ...state,
        filters: {
          ...state.filters,
          [payload]: !state.filters[payload],
        },
      };
    }
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
        items: filterItems(state),
        selected: {},
      };
    }
    case actionTypes.set: {
      return {
        ...state,
        selected: payload,
      };
    }
    case actionTypes.uncheckItem: {
      const lastItem =
        state.items.filter((i) => i.checked === true).length === 1;

      const selected = {
        ...payload,
        checked: false,
      };

      const items = lastItem
        ? filterItems(state)
        : state.items.map((item) => ({
            ...item,
            checked: item.id === payload.id ? !item.checked : item.checked,
          }));

      return {
        ...state,
        items,
        selected,
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
        items: state.items.map((item) => ({
          ...item,
          disabled: item.id === payload,
          checked: item.id === payload && false,
        })),
      };
    }
    case actionTypes.removeItem: {
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          removed: item.id === payload,
        })),
      };
    }
    case actionTypes.toggleItem: {
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          checked: item.id === payload ? !item.checked : item.checked,
        })),
      };
    }
    default:
      return state;
  }
};

const useRandomizer = () => {
  const items = INITIAL_STATE.randomizer.all.sort((a, b) =>
    a.id.localeCompare(b.id)
  );

  const [state, dispatch] = React.useReducer(reducer, {
    items,
    original: { items, filters: INITIAL_STATE.randomizer.filters },
    filters: INITIAL_STATE.randomizer.filters,
    loading: true,
    selected: {}
  });

  React.useEffect(() => {
    dispatch({ type: actionTypes.applyFilters });
  }, [state.filters]);

  const getRandomItem = () => {
    if (state.spinning) return;

    dispatch({
      type: actionTypes.enableSpinning,
    });

    let count = 0;
    let availableItems = state.items.filter((i) => i.checked === true);
    const spinner = setInterval(() => {
      if (count < availableItems.length) {
        dispatch({
          type: actionTypes.set,
          payload: availableItems[count],
        });
        count++;
      } else {
        const randomItemIndex = Math.floor(
          Math.random() * availableItems.length
        );

        dispatch({
          type: actionTypes.uncheckItem,
          payload: availableItems[randomItemIndex],
        });

        clearInterval(spinner);
        dispatch({
          type: actionTypes.disableSpinning,
        });
      }
    }, state.speed || 35);
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

  const reset = () => dispatch({ type: actionTypes.reset });

  const removeItem = (payload) =>
    dispatch({ type: actionTypes.removeItem, payload });

  const toggleFilter = (payload) => {
    dispatch({ type: actionTypes.loading, payload: true });
    dispatch({ type: actionTypes.toggleFilter, payload });
  };

  return {
    toggleFilter,
    disableItem,
    getRandomItem,
    removeItem,
    reset,
    state,
    toggleEditItems,
    toggleItem,
  };
};

export default useRandomizer;
