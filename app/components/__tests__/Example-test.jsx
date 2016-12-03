import React from 'react';
import { shallow } from 'enzyme';
import Clock from '../Example';

describe('<Example />', () => {
  it('should exist', () => {
    expect(Clock).toBeDefined();
  });

  describe('render', () => {
    it('should render a paragraph', () => {
      const clock = shallow(<Clock totalSeconds={62} />);
      const actualText = clock.find('p').text();

      expect(actualText);
    });
  });
});
