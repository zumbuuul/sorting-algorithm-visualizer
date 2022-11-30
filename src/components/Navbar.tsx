import BubbleSort from "../shared/helpers/BubbleSort";
import {
  ActionTypes,
  ReducerAction,
  ReducerState,
} from "../shared/interfaces/reducer-types";

import SortTypeButton from "./SortTypeButton";

type NavbarProps = {
  dispatch: React.Dispatch<ReducerAction>;
  state: ReducerState;
  newArray: () => number[];
};

function Navbar({ dispatch, state, newArray }: NavbarProps): JSX.Element {
  function SelectSortType(selectedSortType: string) {
    dispatch({
      type: ActionTypes.handleSelectSortType,
      payload: selectedSortType,
    });
  }

  function startSorting() {
    if (state.sortingInProgress) return;
    dispatch({ type: ActionTypes.sortingInProgress, payload: true });
    BubbleSort(state.sortingSpeed, state.sortingElements, dispatch);
  }

  return (
    <nav className="w-full p-5 flex flex-row text-[#3348d4]">
      <div className="flex flex-row w-6/12 gap-5 justify-around">
        <SortTypeButton state={state} onClick={() => SelectSortType("bubble")}>
          Bubble Sort
        </SortTypeButton>
        <SortTypeButton state={state} onClick={() => SelectSortType("quick")}>
          Quick Sort
        </SortTypeButton>
        <SortTypeButton
          state={state}
          onClick={() => SelectSortType("insertion")}
        >
          Insertion Sort
        </SortTypeButton>
      </div>
      <div className="w-6/12 flex justify-around">
        <div>
          <button onClick={startSorting}>Sort!</button>
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({
                type: ActionTypes.handleElemensArrayChange,
                payload: newArray(),
              });
            }}
          >
            Generate New Array
          </button>
        </div>
      </div>
      <div className="w-full flex justify-around">
        <div>
          <p className="text-center mb-2">Array Size</p>
          <div className="flex">
            <p className="mr-5">Smallest</p>
            <input
              onChange={(e) =>
                dispatch({
                  type: ActionTypes.handleChangeArraySize,
                  payload: Number(e.target.value),
                })
              }
              value={state.arraySize}
              type="range"
              min="7"
              max="50"
            />
            <p className="ml-5">Largest</p>
          </div>
        </div>
        <div>
          <p className="text-center mb-2">Sorting Speed</p>
          <div className="flex">
            <p className="mr-5">Fastest</p>
            <input
              type="range"
              min="10"
              max="50"
              value={state.sortingSpeed}
              onChange={(e) => {
                dispatch({
                  type: ActionTypes.handleChangeSortingSpeed,
                  payload: Number(e.target.value),
                });
              }}
            ></input>
            <p className="ml-5">Slowest</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
