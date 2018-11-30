import { mount } from 'enzyme';
import Title from '../Title';
import React from 'react';

describe('Title', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
        <Title/>
      );
  });

  it('renders a title heading ', () => {
    expect(wrapper.find("h1").text()).toEqual("Title");
  });
})