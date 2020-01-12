// We import the react hooks we will use, and the Store we made in store.js.
import { useState, useEffect } from 'react';
import { Store } from './store';

// The useStore hook takes in a name for the state and data the state holds.
export default function useStore(stateName = null) {
  // Error handling
  if (stateName === null)
    throw new Error("Parameter [state_name] of *type: 'String'* required");
  if (typeof stateName !== 'string')
    throw new Error("State name must be *type: 'String'*");

  // Grab the piece of state in question from store
  const observable = Store.getState(stateName);
  // Error handle in case it isn't found.
  if (!observable) throw new Error('State requested not found in store');

  // Run a useState hook to grab the data of state and a setter for it
  const [data, setData] = useState(observable.get());

  // Run a useEffect hook to link our Store to this component, and re-render on change
  useEffect(() => observable.subscribe(setData), [observable]);

  // Return the data that updates on change, anywhere.
  return data;
}
