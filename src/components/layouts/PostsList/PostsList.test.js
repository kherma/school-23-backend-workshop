import React from 'react';
import { PostsListComponent } from './PostsList';
import { shallow } from 'enzyme';

describe('PostsList Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PostsListComponent />);
    expect(component).toBeTruthy();
  });
});
