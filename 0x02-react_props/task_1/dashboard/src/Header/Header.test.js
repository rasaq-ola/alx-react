import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';


describe('<Header />', () => {
	it('should should renders without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toBe(true);
	})

	it('should renders <img> and <h1> tags', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists('img')).toBe(true);
		expect(wrapper.exists('h1')).toBe(true);
	})
});
