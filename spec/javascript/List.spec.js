import React from 'react'
import { shallow, mount } from 'enzyme'

import List from '../../app/javascript/components/List'

describe("List test", () => {
    it("should render items", () => {
        const items = [{id:1, name: "teste1", login_name:"", stars: 200, language:"Javascript"}];
        const wrapper = shallow(<List posts={items} />);

        console.log(wrapper.debug());

        expect(wrapper.exists()).toBeTruthy();
        expect(wrapper.find('.widget')).toHaveLength(items.length);
    });




});