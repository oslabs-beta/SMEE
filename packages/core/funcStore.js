import { Store } from './store';

export const createStore = store => {
  if (!store || typeof store !== 'object')
    throw new Error('Parameter [store] of *type: {Obect}* required');

  const keys = Object.keys(store);
  for (let key of keys) {
    // Run a setState on each key value pair in the argument object
    Store.setState(key, store[key]);
  }
};

export const setStore = (stateName = null, callback) => {
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
  let data = state.get();

  // Run the passed in callback on it, adding the requested data as the callbacks' parameter.
  state.set(callback(data));
};
