import { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';

// shallow render NotificationItem component
describe('<NotificationItem/>', () => {
    it('Tests that NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    })

    it('Passes dummy `type` prop and renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="default" />);
        expect(wrapper.html()).toContain('default');
    })

    it('Passes dummy `value` prop and renders the correct html', () => {
        const wrapper = shallow(<NotificationItem type="Successful Notification" />);
        expect(wrapper.find('li').text()).toBe('Successful Notification');
    })

    it('Passes dummy `html` prop and renders the correct html', () => {
        const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
        expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
    })
})