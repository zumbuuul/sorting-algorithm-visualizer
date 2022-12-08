import { ActionTypes, ReducerAction } from "../interfaces/reducer-types";

import { useRef } from "react";

export default async function BubbleSort(
  delay: number,
  array: number[],
  sortedArray: number[],
  dispatch: any
): Promise<void> {
  const arr = [...array];
  const arrSize = arr.length;
  for (var i = 0; i < arrSize; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      dispatch({
        type: ActionTypes.handleChangeCurrentActiveElement,
        payload: [j, j + 1],
      });
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        dispatch({
          type: ActionTypes.handleChangeComparedElement,
          payload: true,
        });
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }

      await new Promise((res, rej) => {
        setTimeout(() => res(1), delay);
      });

      dispatch({
        type: ActionTypes.handleChangeComparedElement,
        payload: false,
      });
      dispatch({
        type: ActionTypes.handleElemensArrayChange,
        payload: [...arr],
      });
    }
    const a = arr.pop();
    const b = sortedArray;
    if (a != undefined) b.push(a);
    dispatch({ type: ActionTypes.handleElemensArrayChange, payload: [...arr] });
    dispatch({ type: ActionTypes.handleChangeSortedArray, payload: [...b] });
  }

  dispatch({ type: ActionTypes.sortingInProgress, payload: false });
}
