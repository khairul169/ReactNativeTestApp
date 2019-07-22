import React from "react";
import renderer from "react-test-renderer";

// Components
import Header from "../sources/Components/Header";
import Button from "../sources/Components/Button";

describe("<Header />", () => {
  const defaultProps = {
    title: "Header"
  };
  const wrapper = renderer.create(<Header {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<Button />", () => {
  const defaultProps = {
    title: "Button"
  };
  const wrapper = renderer.create(<Button {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
