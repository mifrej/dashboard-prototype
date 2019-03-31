import React from 'react';
import ReactDOM from 'react-dom';
import Meta from './meta';

describe('<Meta />', () => {
  it('should render without crash', () => {
    const rootElement = document.createElement('div');
    ReactDOM.render(<Meta />, rootElement);
  });
});
