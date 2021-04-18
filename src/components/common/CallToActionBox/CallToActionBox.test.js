import React from 'react';
import { CallToActionBoxComponent } from './CallToActionBox';
import { shallow } from 'enzyme';

describe('CallToActionBox Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<CallToActionBoxComponent />);
    expect(component).toBeTruthy();
  });
});
