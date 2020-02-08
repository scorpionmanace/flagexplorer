import React from "react";
import ListItem from "../components/ListItem";

const ListGroup = props => {
  const { type, listItems, onSelectionChange, selections } = props;

  return (
    <ul>
      {listItems.map(item => {
        return (
          <ListItem
            type={type}
            item={item}
            onclick={val => onSelectionChange(val)}
            isChecked={selections.includes(item)}
          />
        );
      })}
      {/* <ListItem type={type} item="" /> */}
    </ul>
  );
};

export default ListGroup;
