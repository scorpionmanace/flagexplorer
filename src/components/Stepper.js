import React from "react";
import TypeAhead from "./TypeAhead";
import { StepperType } from "../commons/enums";
import HorizontalList from "./HorizontalList";
import Constants from "../commons/Constants";
import "../styles/stepper.css";

// Parent component to render steps
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
    selections,
    placeholderText
  } = props;

  return (
    <div className="stepper" id={componentId}>
      <h3 className="stepper__heading lead-text__medium-large">{heading}</h3>
      <h4 className="stepper__sub-heading lead-text__medium">{subHeading}</h4>
      {stepperType === StepperType.write ? (
        <>
          <TypeAhead
            type={listType}
            listItems={listItems}
            onSelectionChange={onSelectionChange}
            selections={selections}
            onInputChange={onInputChange}
            componentName={componentId}
            placeholderText={placeholderText}
          />
          {selections.length > 0 ? (
            <div className="selection-container p-y-1">
              <label className="lead-text__medium">
                {Constants.yourSelections}
              </label>
              <div className="selection-value-wrapper">
                {selections.map(selection => {
                  return (
                    <div
                      className="lead-text p-y-1"
                      val={selection}
                      key={selection}
                    >
                      {selection}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <HorizontalList listItems={listItems} onClear={onSelectionChange} />
      )}
    </div>
  );
};

export default Stepper;
