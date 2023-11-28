import React from "react";
import { shallow } from "enzyme";
import ChristmasWish from "./ChristmasWish";

describe("ChristmasWish", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ChristmasWish />);
    expect(wrapper).toMatchSnapshot();
  });
});
