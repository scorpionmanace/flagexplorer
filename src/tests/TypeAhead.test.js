import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TypeAhead from "../components/TypeAhead";
import { ListTypes } from "../commons/enums";

test("renders learn react link", () => {
  const { container, getByText } = render(
    <TypeAhead type={ListTypes.single} listItems={["indoor", "outdoor"]} />
  );

  fireEvent.click(container.childNodes[0].childNodes[0].childNodes[0]);

  const linkElement = getByText(/text/i);
  expect(linkElement).toBeInTheDocument();
});
