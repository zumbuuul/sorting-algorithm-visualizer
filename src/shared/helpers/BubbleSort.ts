import { ActionTypes, ReducerAction } from "../interfaces/reducer-types";

export default async function BubbleSort(
  delay: number,
  array: number[],
  dispatch: any
): Promise<void> {
  const arr = [...array];
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      dispatch({
        type: ActionTypes.handleElemensArrayChange,
        payload: [...arr],
      });
      await new Promise((res, rej) => {
        setTimeout(() => res(1), delay);
      });
    }
  }

  dispatch({ type: ActionTypes.sortingInProgress, payload: false });
}
