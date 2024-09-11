er.find('th').exists()).toBe(true);
	})

	it(`should renders two cells when textSecondCell is present`, () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
		expect(wrapper.find('th').length).toBe(2);
	})

	it(`should renders two td elements within a tr element`, () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
		expect(wrapper.find('tr').length).toBe(1);
		expect(wrapper.find('td').length).toBe(2);
	})
})
