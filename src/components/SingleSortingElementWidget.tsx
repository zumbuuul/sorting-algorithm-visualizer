type SingleSortingElementWidgetProps = {
  element: number;
};

function SingleSortingElementWidget({
  element,
}: SingleSortingElementWidgetProps) {
  return <div className="w-[5px] bg-black" style={{ height: element }}></div>;
}

export default SingleSortingElementWidget;
