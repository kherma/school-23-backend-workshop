import React from 'react';
import { PostComponent } from './Post';
import { shallow } from 'enzyme';

describe('Post Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PostComponent />);
    expect(component).toBeTruthy();
  });
});
