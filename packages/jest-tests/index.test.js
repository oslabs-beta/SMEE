/* eslint-disable no-undef */
// import { useStore } from '@smee/core/useStore';
// import { createStore, setStore } from '@smee/core/funcStore';

import { str, str2 } from '@smee/core/test';

describe('SMEE: Build a store', () => {
  // const theStore = createStore({ counter: 0 });
  // console.log(useStore('counter'));
  // it('Should crate a store', () => {
  //   expect(useStore('counter')).toBe(0);
  // });
  const astring = str;
  const bstring = str2;
  it('testing stuff', () => {
    expect(str).toBe('Test my func');
  });
});
