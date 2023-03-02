import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";

describe('<Notifications />', () => {
    it('tests that Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exist()).toBe(true);
    });

    it('checks that the component renders <NotificationItem /> elements', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists('<NotificationItem />')).toBe(true);
    });

    it('Checks first Item renders correct html', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.html()).toContain('New course available');
    })
});