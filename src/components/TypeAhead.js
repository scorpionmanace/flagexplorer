import React, { useState } from "react";
import ListGroup from "./ListGroup";

const TypeAhead = props => {
  console.log("Type Ahead:", props);
  const {
    type,
    listItems,
    componentName,
    onSelectionChange,
    onInputChange,
    selections
  } = props;
  // const [items, setItems] = useState(listItems);

  const keyUpHandler = event => {
    onInputChange(event.target.value);
    // console.log(event.target.value);

    // const { value } = event.target;
    // if (value === "") {

    //   setItems(listItems);
    // } else {
    //   setItems(
    //     listItems.filter(
    //       itemVal => itemVal.toLowerCase().indexOf(value.toLowerCase()) !== -1
    //     )
    //   );
    // }
  };

  return (
    <div id={componentName + "Component"}>
      <div className="input-wrapper">
        <input type="text" onKeyUp={keyUpHandler} />
        <ListGroup
          type={type}
          listItems={listItems}
          onSelectionChange={onSelectionChange}
          selections={selections}
        />
      </div>
    </div>
  );
};

export default TypeAhead;
