import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Example from '../Example';

describe('<Example />', () => {
  it('render correctly', () => {
    const tree = renderer.create(<Example />);
    expect(tree).toMatchSnapshot();
  });

  describe('render', () => {
    it('should render a paragraph', () => {
      const clock = shallow(<Example />);
      const actualText = clock.find('p').text();

      expect(actualText).toBe('Example.jsx');
    });
  });
});
