import React, { FormEvent } from "react";
import { render, RenderResult, cleanup } from "react-testing-library";
import { InputComponent } from "./input.component";

interface InputProps
  extends Readonly<{
    label: string;
    name: string;
    value: string;
    handler: (event: Event | undefined) => void;
  }> {}

describe("Input Component", () => {
  let component: RenderResult;
  let props: InputProps;
  beforeEach(() => {
    const value = "Mickael";
    const label = "Name";
    const name = "firstname";
    const handler = () => jest.fn();
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
