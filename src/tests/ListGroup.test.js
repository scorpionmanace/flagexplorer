import React from "react";
import { render } from "@testing-library/react";
import { ListTypes } from "../commons/enums";
import ListGroup from "../components/ListGroup";

test("Component Renders Test List", () => {
  const { getByText } = render(
    <ListGroup
      type={ListTypes.single}
      selections={[]}
      listItems={["india", "china"]}
      isVisible={true}
    />
  );

  expect(getByText(/india/i)).toBeInTheDocument();
  expect(getByText(/china/i)).toBeInTheDocument();
});
