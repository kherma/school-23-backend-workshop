import React from 'react';
import { HomepageComponent } from './Homepage';
import { shallow } from 'enzyme';

describe('Homepage Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<HomepageComponent />);
    expect(component).toBeTruthy();
  });
});
