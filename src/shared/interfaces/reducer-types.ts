export enum ActionTypes {
  handleChangeArraySize = "HANDLE_CHANGE_ARRAY_SIZE",
  handleChangeSortingSpeed = "HANDLE_CHANGE_SORTING_SPEED",
  handleElemensArrayChange = "HANDLE_ELEMENTS_ARRAY_CHANGE",
  handleSelectSortType = "HANDLE_SELECT_SORT_TYPE",
  sortingInProgress = "SORTING_IN_PROGRESS",
  handleChangeCurrentActiveElement = "HANDLE_CHANGE_CURRENT_ACTIVE_ELEMENT",
  handleChangeComparedElement = "HANDLE_CHANGE_COMPARED_ELEMENT",
  handleChangeSortedArray = "HANDLE_CHANGE_SORTED_ARRAY",
}

export type ReducerAction =
  | { type: "HANDLE_CHANGE_ARRAY_SIZE"; payload: number }
  | { type: "HANDLE_CHANGE_SORTING_SPEED"; payload: number }
  | { type: "HANDLE_ELEMENTS_ARRAY_CHANGE"; payload: number[] }
  | { type: ActionTypes.handleSelectSortType; payload: string }
  | { type: ActionTypes.sortingInProgress; payload: boolean }
  | { type: ActionTypes.handleChangeCurrentActiveElement; payload: number[] }
  | { type: ActionTypes.handleChangeComparedElement; payload: boolean }
  | { type: ActionTypes.handleChangeSortedArray; payload: number[] };

export type ReducerState = {
  arraySize: number;
  sortingSpeed: number;
  sortingElements: number[];
  selectedSort: string;
  sortingInProgress: boolean;
  currentActiveElement: number[];
  comparedElement: boolean;
  sortedArray: number[];
};
