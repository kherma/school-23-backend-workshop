import React from 'react';
import { {{pascalCase name}}Component } from './{{pascalCase name}}';
import { shallow } from 'enzyme';

describe('{{pascalCase name}} Component', () => {
  it('Should render without crashing', () => {
    const component = shallow(<{{pascalCase name}}Component />);
    expect(component).toBeTruthy();
  });
});
