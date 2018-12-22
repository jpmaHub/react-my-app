import { mount } from 'enzyme';
import SearchType from '../SearchType';
import React from 'react';

describe('Title', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
        <SearchType/>
      );
  });

  it('renders a title heading ', () => {
    expect(wrapper.find("h1").text()).toEqual("Title");
  });
})