import React from 'react';
import { HeaderComponent } from './Header';
import { shallow } from 'enzyme';

describe('Header Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<HeaderComponent />);
    expect(component).toBeTruthy();
  });
});
