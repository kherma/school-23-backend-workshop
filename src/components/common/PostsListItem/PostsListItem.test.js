import React from 'react';
import { PostsListItemComponent } from './PostsListItem';
import { shallow } from 'enzyme';

describe('PostsListItem Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<PostsListItemComponent />);
    expect(component).toBeTruthy();
  });
});
