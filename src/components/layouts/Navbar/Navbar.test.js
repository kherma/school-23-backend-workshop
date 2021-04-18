import React from 'react';
import { NavbarComponent } from './Navbar';
import { shallow } from 'enzyme';

describe('Navbar Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<NavbarComponent />);
    expect(component).toBeTruthy();
  });
});
