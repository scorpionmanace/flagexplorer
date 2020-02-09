import React, { useState, createRef } from "react";
import ListGroup from "./ListGroup";

const TypeAhead = props => {
  console.log("Type Ahead:", props);
  const {
    type,
    listItems,
    componentName,
    onSelectionChange,
    onInputChange,
    selections,
    placeholderText
  } = props;

  const [dropdownVisible, setDropdonwVisible] = useState(false);

  const keyUpHandler = event => {
    onInputChange(event.target.value);
  };

  const toggleDropdown = event => {
    setDropdonwVisible(!dropdownVisible);
  };

  const changeDropdown = event => {
    setDropdonwVisible(false);
  };

  let textRef = createRef();

  console.log(textRef);
  let id = `typeahead-${componentName}`;
  document.addEventListener(
    "click",
    event => {
      if (document.getElementById(id).contains(event.target)) {
        return;
      }
      document.removeEventListener("click", this, false);
      changeDropdown();
    },
    false
  );
  return (
    <div className="type__ahead" id={id} ref={textRef}>
      <div className="input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder={placeholderText}
          onKeyUp={keyUpHandler}
          onFocus={toggleDropdown}
        />
        <ListGroup
          type={type}
          listItems={listItems}
          onSelectionChange={onSelectionChange}
          selections={selections}
          toggleVisibility={toggleDropdown}
          componentName={componentName}
          isVisible={dropdownVisible}
        />
      </div>
    </div>
  );
};

export default TypeAhead;
