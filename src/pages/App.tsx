import Navbar from "../components/Navbar";

import { useEffect, useReducer } from "react";
import reducer from "../shared/helpers/helpers";

import { ReducerState, ActionTypes } from "../shared/interfaces/reducer-types";
import SingleSortingElementWidget from "../components/SingleSortingElementWidget";

const initialArgs = {
  arraySize: 15,
  sortingSpeed: 30,
  sortingElements: [],
  selectedSort: "bubble",
  sortingInProgress: false,
} as ReducerState;

function App() {
  const [state, dispatch] = useReducer(reducer, initialArgs);

  function generateRandomArray() {
    let array = [];

    for (let i = 0; i < state.arraySize; i++) {
      array.push(Math.floor(Math.random() * 100 + 15));
    }

    return array;
  }

  useEffect(() => {
    dispatch({
      type: ActionTypes.handleElemensArrayChange,
      payload: generateRandomArray(),
    });
  }, [state.arraySize]);

  return (
    <>
      <Navbar
        dispatch={dispatch}
        state={state}
        newArray={generateRandomArray}
      ></Navbar>

      <div className="flex gap-2 w-full h-[100vh] justify-center items-center">
        <div className="flex gap-2">
          {state.sortingElements.map((element, idx) => (
            <SingleSortingElementWidget
              element={element}
              key={idx}
            ></SingleSortingElementWidget>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
