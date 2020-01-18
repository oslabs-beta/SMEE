/**
 * @summary custom hook to get data from store 
 *
 * @description 
 * useStore
 * useState
 * useEffect
 *
 * @file   ./packages/core/useStore.js 
 * 
 * @authors _____
 */

 /**
 * useStore takes the querying piece of state, its value and a function that changes the state as arguments and returns the state object's data  
 * @param {*} stateName 
 * 
 */
const { useState, useEffect } = require('react');
const { Store } = require('./store');


// The useStore hook
// eslint-disable-next-line import/prefer-default-export
const useStore = (stateName = null, value = null) => {
  if (stateName === null)
    throw new Error("Parameter [state_name] of *type: 'String'* required");
  if (typeof stateName !== 'string')
    throw new TypeError("State name must be *type: 'String'*");

  // Grab the piece of state in question from store
  let observable = Store.getState(stateName);
  // If observable is found and a value is passed in, error handle
  if (observable && value !== null)
    throw new Error(
      `Attepted to generate new state: ${stateName} but requested state already exists in store`,
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
};

module.exports = {
  useStore,
};
