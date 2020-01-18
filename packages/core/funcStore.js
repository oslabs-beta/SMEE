/**
 * @summary custom hook to be imported into your file
 *
 * @description creates the store to be used in your application and returns a store object 
 *  createStore 
 *  setStore
 * 
 * @file  ./packages/core/funcStore.js 
 * 
 * @authors Riley Burns, Rodrigo Fuentes, Georgina Carr, Joseph Corrado, Le Bui
 */


const { Store } = require('./store');

/**
 * createStore takes an object as an argument and holds the the name of the store and its data globally 
 * @param {*} store 
 * 
 */
const createStore = store => {
  if (!store || typeof store !== 'object')
    throw new Error('Parameter [store] of *type: {Obect}* required');

  // Grab keys off the object into an array 
  const keys = Object.keys(store);
  // Iterate and run a setState on each
  keys.forEach(key => Store.setState(key, store[key]));
};

/**
 * setStore updates the requested state in the store via a callback function
 * @param {*} stateName 
 * @param {*} callback 
 */
const setStore = (stateName = null, callback) => {
  if (stateName === null)
    throw new Error("Parameter [state_name] of *type: 'String'* required");
  if (typeof stateName !== 'string')
    throw new TypeError("State name must be *type: 'String'*");
  if (!callback || typeof callback !== 'function')
    throw new Error('Parameter [callback_func] of *type: |Function|* required');

  // Grab the state in question from store
  const state = Store.getState(stateName);
  if (!state) throw new Error('State requested not found in store');
  // Grab the data
  const data = state.get();

  // Run the passed in callback on it, adding the requested data as the callbacks' parameter.
  state.set(callback(data));
};

module.exports = {
  createStore,
  setStore,
};
