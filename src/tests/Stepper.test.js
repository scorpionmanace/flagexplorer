import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Stepper from "../components/Stepper";
import { ListTypes, StepperType } from "../commons/enums";

test("renders heading in the step 1 component", () => {
  const { getByText } = render(
    <Stepper
      heading="Step 1"
      type={ListTypes.single}
      listItems={["indoor", "outdoor"]}
    />
  );

  const linkElement = getByText(/Step 1/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders sub heading in the step 1 component", () => {
  const { getByText } = render(
    <Stepper
      subHeading="Select a Continent."
      type={ListTypes.single}
      listItems={["indoor", "outdoor"]}
    />
  );

  const linkElement = getByText(/Select a Continent./i);
  expect(linkElement).toBeInTheDocument();
});

test("renders 'Your Selections' in the step 1 component", () => {
  const { getByText } = render(
    <Stepper
      heading="Step 1"
      type={ListTypes.single}
      stepperType={StepperType.write}
      listItems={["indoor", "outdoor"]}
      selections={["indoor"]}
    />
  );

  const linkElement = getByText(/Your Selections/i);
  expect(linkElement).toBeInTheDocument();
});
