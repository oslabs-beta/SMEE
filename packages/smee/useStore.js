import { useState, useEffect } from 'react';
import { Store } from './store';

// The useStore hook
export function useStore(stateName = null, value = null) {
  if (stateName === null)
    throw new Error("Parameter [state_name] of *type: 'String'* required");
  if (typeof stateName !== 'string')
    throw new TypeError("State name must be *type: 'String'*");

  // Grab the piece of state in question from store
  let observable = Store.getState(stateName);

  if (observable && value !== null)
    throw new Error(
      'Attepted to generate new state-- state already exists in store',
    );
  // If no value is found, make new state and update the observer variable
  if (!observable) {
    if (value === null)
      throw new Error(
        `Attempted to make new state: ${stateName}, no value for ${stateName} in parameters`,
      );
    Store.setState(stateName, value);
    observable = Store.getState(stateName);
  }

  // Run a useState hook to grab the data of state and a setter for it
  const [data, setData] = useState(observable.get());

  // Run a useEffect hook to link our Store to this component, and re-render on change
  useEffect(() => observable.subscribe(setData), [observable]);

  // Return the data that updates on the state objects' change
  return data;
}
