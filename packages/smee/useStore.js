// This is the custom hook, currently the only thing we have and need.

// We import the react hooks we will use, and the Store we made in store.js.
import { useState, useEffect } from 'react';
import { Store } from './store';

// The useStore hook takes in a name for the state and data the state holds.
export function useStore(stateName = null, state = null) {
  // Debug to get all state.
  if (stateName === null) return Store.getState();

  // Error handling if blocks
  if (typeof stateName !== 'string')
    throw new Error('State name must be a string');
  if (!Store.getState(stateName) && state === null)
    throw new Error('Not found in store');

  // If we are making state, make some state.
  if (!Store.getState(stateName) && state !== null)
    Store.setState(stateName, state);

  // Grab the piece of state in question
  const observable = Store.getState(stateName);

  // Run a useState hook to grab the data of state and a setter for it
  const [data, setData] = useState(observable.get());

  // Run a useEffect hook to link our Store to this component, and re-render on change
  useEffect(() => observable.subscribe(setData), [observable]);

  // Return the data that updates on change, anywhere.
  return data;
}

export default useStore;
