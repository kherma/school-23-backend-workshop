import React from 'react';
import { PostAddComponent } from './PostAdd';
import { shallow } from 'enzyme';

describe('PostAdd Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PostAddComponent />);
    expect(component).toBeTruthy();
  });
});
