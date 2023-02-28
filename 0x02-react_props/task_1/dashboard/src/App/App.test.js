import { shallow } from "enzyme";
import React from "react";
import Notifications from "../Notifications/Notifications";
import App from './App';

describe('<App />', () => {
  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  })

  it('Tests that App contains Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Notifications />)).toBe(true);
  })

  it('Tests that App contains Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').length).toBe(1);
  })

  it('Tests that App contains Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).toBe(true);
  })

  it('Tests that App contains Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').length).toBe(1);
  })
});