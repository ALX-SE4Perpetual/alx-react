import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe(<Footer />, () => {
    it('Test that Footer renders without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    })

    it('Test that the component contains the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.contain('text')).toContain('Copyright');
    })
})