/* eslint-disable no-undef */
import { useStore } from '@smee/core/useStore';
import { createStore, setStore } from '@smee/core/funcStore';
import React from 'react';
import ReactDOM from 'react-dom';

describe('SMEE: Build a store', () => {
  const App = () => {
    return <h1>test app</h1>;
  };
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
