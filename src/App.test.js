import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Select a continent/i);
  expect(linkElement).toBeInTheDocument();
});

test("Header Exists", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Flag Picker/i);
  expect(linkElement).toBeInTheDocument();
});

test("Subheader Exists", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(
    /This app will help you learn flags from the world in/i
  );
  expect(linkElement).toBeInTheDocument();
});
