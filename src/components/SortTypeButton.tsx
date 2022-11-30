import React from "react";

import { ReducerState } from "../shared/interfaces/reducer-types";

interface SortTypeButtonProps {
  onClick: () => void;
  children: string;
  state: ReducerState;
}

function SortTypeButton({ children, onClick, state }: SortTypeButtonProps) {
  const text = children.split(" ");

  return (
    <>
      {state.selectedSort === text[0].toLowerCase() ? (
        <p className="font-semibold hover:cursor-pointer">{children}</p>
      ) : (
        <p className="hover:cursor-pointer" onClick={() => onClick()}>
          {children}
        </p>
      )}
    </>
  );
}

export default SortTypeButton;
