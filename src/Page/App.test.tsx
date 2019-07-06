import React from "react";
import { render } from "react-testing-library";
import { App } from "./App";

it("renders without crashing", () => {
  jest.mock('__electron');
  const component = render(<App />);
  expect(component).toBeDefined();
});
