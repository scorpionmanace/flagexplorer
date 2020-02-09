import React from "react";
import { ListTypes } from "../commons/enums";
/**
 *
 */
const ListItem = props => {
  const { type, item, onclick, isChecked = false } = props;

  const clickHandler = event => {
    onclick(item);
  };
  return (
    <li onClick={clickHandler}>
      {type === ListTypes.multi ? (
        <input
          type="checkbox"
          value={item}
          checked={isChecked}
          onChange={() => {}}
        />
      ) : (
        ""
      )}
      <label className="list-item-val">{item}</label>
    </li>
  );
};

export default ListItem;
