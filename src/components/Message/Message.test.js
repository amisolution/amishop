/* global describe it expect */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Message from './index';

configure({ adapter: new Adapter() });

describe('Component Message', () => {
  const component = renderer
    .create(
      <Message theme="info">
        Hello AmiShop; this is a test Message. Lieber Amicorum...
      </Message>
    );
  const tree = component.toJSON();

  it('should be render without crash', () => {
    expect(tree).toMatchSnapshot();
  });
});
