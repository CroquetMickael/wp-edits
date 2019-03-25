import React from "react";
import { render, RenderResult, cleanup } from "react-testing-library";
import InputComponent from "./input.component";

interface InputProps
  extends Readonly<{
    label: string;
    name: string;
    value: string;
    handler: (event: any) => void;
  }> {}

describe("Input Component", () => {
  let component: RenderResult;
  let props: InputProps;
  beforeEach(() => {
    let value = "Mickael";
    let label = "Name";
    let name = "firstname";
    let handler = () => jest.fn();
    props = {
      value,
      handler,
      label,
      name
    };
    component = render(<InputComponent {...props} />);
  });
  afterEach(cleanup);

  it("Should render properly Input Component", () => {
    const { container } = component;
    expect(container).toMatchSnapshot();
  });
});
