import React from 'react';
import {configure,render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Messages from '../Messages'

configure({ adapter: new Adapter() });
it('Check with 3 Bot messages', () => {   
    const test = [
        {
            author: "Bot",
            text: "Test message1"
        },
        {
            author: "Bot",
            text: "Test message2"
        },
        {
            author: "Bot",
            text: "Test message3"
        }
    ]
    const wrapper = render(<Messages messages={test}/>);
    expect(wrapper).toMatchSnapshot();
});