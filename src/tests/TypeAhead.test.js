import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TypeAhead from "../components/TypeAhead";
import { ListTypes } from "../commons/enums";

test("renders learn react link", () => {
  const { getByText } = render(
    <TypeAhead type={ListTypes.single} listItems={["indoor", "outdoor"]} />
  );

  const linkElement = getByText(/text/i);
  expect(linkElement).toBeInTheDocument();
});
