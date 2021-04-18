import React from 'react';
import { WelcomeBoxComponent } from './WelcomeBox';
import { shallow } from 'enzyme';

describe('WelcomeBox Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<WelcomeBoxComponent />);
    expect(component).toBeTruthy();
  });
});
