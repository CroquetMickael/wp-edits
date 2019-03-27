import React from "react";
import { render } from "react-testing-library";
import { App } from "./App";

it("renders without crashing", () => {
  const component = render(<App />);
  expect(component).toBeDefined();
});
