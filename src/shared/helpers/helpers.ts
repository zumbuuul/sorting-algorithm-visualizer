import {
  ActionTypes,
  ReducerAction,
  ReducerState,
} from "../interfaces/reducer-types";

export default function reducer(state: ReducerState, action: ReducerAction) {
  switch (action.type) {
    case ActionTypes.handleChangeArraySize:
      {
        return { ...state, arraySize: action.payload };
      }
      break;
    case ActionTypes.handleChangeSortingSpeed:
      {
        return { ...state, sortingSpeed: action.payload };
      }
      break;
    case ActionTypes.handleElemensArrayChange:
      {
        return { ...state, sortingElements: action.payload };
      }
      break;

    case ActionTypes.handleSelectSortType:
      {
        return { ...state, selectedSort: action.payload };
      }
      break;
    case ActionTypes.sortingInProgress:
      {
        return {
          ...state,
          sortingInProgress: action.payload,
        };
      }
      break;
    default: {
      return state;
    }
  }
}
