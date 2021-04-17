import React from 'react';
import { PostEditComponent } from './PostEdit';
import { shallow } from 'enzyme';

describe('PostEdit Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PostEditComponent />);
    expect(component).toBeTruthy();
  });
});
