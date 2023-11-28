import React from "react";
import { shallow } from "enzyme";
import ChristmasList from "./ChristmasList";

describe("ChristmasList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ChristmasList />);
    expect(wrapper).toMatchSnapshot();
  });
});
