import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe('<Notifications />', () => {
    it('tests that Notifications renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exist()).toBe(true);
    });

    it('tests that Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('tests that Notifications renders the html text "Here is a list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is a list of notifications');
    })
});