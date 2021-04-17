import React from 'react';
import { NotFoundComponent } from './NotFound';
import { shallow } from 'enzyme';

describe('NotFound Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<NotFoundComponent />);
    expect(component).toBeTruthy();
  });
});
