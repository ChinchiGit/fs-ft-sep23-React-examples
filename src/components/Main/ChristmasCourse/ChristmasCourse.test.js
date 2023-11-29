import React from "react";
import { shallow } from "enzyme";
import ChristmasCourse from "./ChristmasCourse";

describe("ChristmasCourse", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ChristmasCourse />);
    expect(wrapper).toMatchSnapshot();
  });
});
