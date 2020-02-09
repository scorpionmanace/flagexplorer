import React from "react";
import ListItem from "../components/ListItem";

const ListGroup = props => {
  const {
    type,
    listItems,
    onSelectionChange,
    selections,
    componentName,
    isVisible
  } = props;
  let id = `list-grp-${componentName}`;
  return (
    <ul className="dropdown-group" id={id}>
      {listItems.map(item => {
        return isVisible ? (
          <ListItem
            type={type}
            item={item}
            onclick={val => onSelectionChange(val)}
            isChecked={selections.includes(item)}
            key={item}
          />
        ) : (
          ""
        );
      })}
    </ul>
  );
};

export default ListGroup;
