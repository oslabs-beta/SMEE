// This is the custom hook, currently the only thing we have and need.

// We import the react hooks we will use, and the Store we made in store.js.
import { useState, useEffect } from 'react';
import { Store } from './store';

// added default - rf
// The useStore hook takes in a name for the state and data the state holds.
export default function useStore(stateName, state = null) {
  // If nothing is passed in, we grab that copy of the entire state.
  if (typeof stateName === 'undefined' && state === null) {
    return Store.getState();
  }

  // If a name is passed in without a state value, we assume it is a store search. If the name is not found, throw.
  if (!Store.getState(stateName) && state === null)
    throw new Error('Not found in store'); // rf

  // If all params are filled, we assume they want to add to state; so we add to state and continue as they also would like to add the component to listeners.
  if (!Store.getState(stateName) && state !== null) {
    Store.setState(stateName, state);
  }
  // We declare our ref to the state in a variable to make it easier to, well, reference.
  const observable = Store.getState(stateName);
  // We run useState on our observable to get its state-data as our initial data.
  const [data, setData] = useState(observable.get());

  // We run a useEffect to run the subscribe method on that data, and will update any time the observed state changes.
  useEffect(() => observable.subscribe(setData), [observable]);

  // Return the current data out, and on change that data will update.
  return data;
}

Store.setState('Testing', 45); // this is the test

(function iife() {
  console.log(useStore());
})();
