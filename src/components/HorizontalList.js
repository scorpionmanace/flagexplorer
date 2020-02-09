import React from "react";
import Constants from "../commons/Constants";
// Used to diplay flgs in a horizontal list format (can also be used to list other items in horizontal list format)
const HorizontalList = props => {
  const { listItems, onClear } = props;

  return (
    <>
      <div className="h-items-container flex d-wrap f-justify-center p-y-1">
        {listItems.map(({ country, flag }) => (
          <div className="list-item lead-text__large" key={country}>
            {flag}
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          onClear();
        }}
      >
        {Constants.clearFlags}
      </button>
    </>
  );
};

export default HorizontalList;
