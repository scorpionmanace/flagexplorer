import React, { useState } from "react";

const HorizontalList = props => {
  const { listItems } = props;

  return (
    <div className="items-container">
      {listItems.map(({ country, flag }) => (
        <div className="item">{flag}</div>
      ))}
    </div>
  );
};

export default HorizontalList;
