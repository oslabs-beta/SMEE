/* eslint-disable no-param-reassign */
function createStore() {
  // Create our store object.
  const globalStore = {};

  // This get just grabs the data we hold in the piece of state currently being targeted and nothing else.
  const getter = state => ({
    get: () => state.data,
  });

  // This sets initial state data OR modifies our state data and updates state listeners.
  const setter = state => ({
    set: newData => {
      if (state.data !== newData) {
        state.data = newData;
        state.listeners.forEach(observer => observer(newData));
      }
    },
  });

  // This will subscribe a component to the target piece of state, and return a function that will unsubscribe when invoked.
  const subscriber = state => ({
    subscribe: listener => {
      state.listeners.push(listener);
      return () => {
        state.listeners = state.listeners.filter(
          observer => observer !== listener,
        );
      };
    },
  });

  // Closure. We return an anonymous object that can set a piece of state or get a piece of state. BONUS: if nothing is passed into getState it returns a copy of the entire state, useful for debugging.
  return {
    setState: (name, data) => {
      if (typeof name !== 'string')
        throw new Error('State name must be a string');

      // Using functional composition here-- This way we keep references to functions, allow our code to be modified later if needed with ease, and removes the extra text on each build. Also, allows for minification.
      globalStore[name] = (() => {
        const state = { data: null, listeners: [] };
        return Object.assign(
          state,
          getter(state),
          setter(state),
          subscriber(state),
        );
      })();
      globalStore[name].set(data);
    },

    getState: (name = null) => {
      if (name === null) return { ...globalStore };

      if (typeof name !== 'string')
        throw new Error('State name must be a string');

      if (!globalStore[name]) return false;
      return globalStore[name];
    },
  };
}
// eslint-disable-next-line import/prefer-default-export
export const Store = createStore();
