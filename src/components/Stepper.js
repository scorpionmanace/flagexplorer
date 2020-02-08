import React, { useState } from "react";
import TypeAhead from "./TypeAhead";
import { StepperType } from "../commons/enums";
import HorizontalList from "./HorizontalList";
const Stepper = props => {
  const {
    componentId,
    heading,
    subHeading,
    listItems,
    listType,
    stepperType,
    onSelectionChange,
    onInputChange,
    selections
  } = props;

  console.log({ ...props });
  //   const [selections, setSelections] = useState([]);

  return (
    <div className="" id={componentId}>
      <h3 className="">{heading}</h3>
      <h4 className="">{subHeading}</h4>
      {stepperType === StepperType.write ? (
        <>
          <TypeAhead
            type={listType}
            listItems={listItems}
            onSelectionChange={onSelectionChange}
            selections={selections}
            onInputChange={onInputChange}
          />
          <div className="">
            <label>Your Selections</label>
            <div className="selection-value-wrapper">
              {selections.map(selection => {
                return (
                  <div className="selection" val={selection}>
                    {selection}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <HorizontalList listItems={listItems} />
      )}
    </div>
  );
};

export default Stepper;
