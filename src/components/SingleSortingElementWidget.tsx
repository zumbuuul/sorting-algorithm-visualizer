type SingleSortingElementWidgetProps = {
  arraySize: number;
  element: number;
  comparedElement?: boolean;
  currentActiveElement?: number[];
  idx?: number;
  type?: boolean;
};

function SingleSortingElementWidget({
  element,
  currentActiveElement,
  arraySize,
  comparedElement,
  idx,
  type,
}: SingleSortingElementWidgetProps) {
  let elementSize = 100 / (arraySize * 0.1);

  //sorted or not
  if (type) {
    return (
      <div
        className="w-[5px]"
        style={{
          height: `${element * 5}px`,
          backgroundColor: "#565584",
          width: `${elementSize}px`,
        }}
      ></div>
    );
  }

  if (currentActiveElement != undefined)
    for (let i = 0; i < currentActiveElement?.length; i++) {
      if (currentActiveElement[i] === idx)
        if (!comparedElement)
          return (
            <div
              style={{
                height: `${element * 5}px`,
                backgroundColor: "#78dcca",
                width: `${elementSize}px`,
              }}
            ></div>
          );
        else
          return (
            <div
              style={{
                height: `${element * 5}px`,
                backgroundColor: "red",
                width: `${elementSize}px`,
              }}
            ></div>
          );
    }

  return (
    <>
      <div
        style={{
          height: `${element * 5}px`,
          backgroundColor: "#ff77e9",
          width: `${elementSize}px`,
        }}
      ></div>
    </>
  );
}

export default SingleSortingElementWidget;
