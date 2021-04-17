import React from 'react';
import { MainLayoutComponent } from './MainLayout';
import { shallow } from 'enzyme';

describe('MainLayout Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<MainLayoutComponent />);
    expect(component).toBeTruthy();
  });
});
