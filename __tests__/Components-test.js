import React from "react";
import renderer from "react-test-renderer";

// Components
import Header from "../sources/Components/Header";
import Button from "../sources/Components/Button";
import Footer from "../sources/Components/Footer";

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

describe("<Footer />", () => {
  const defaultProps = {};
  const wrapper = renderer.create(<Footer {...defaultProps} />);

  test("render", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
