function createStore() {
  // Create our store object.
  const globalStore = {};

  // This is likely temporary, but for my own ease-of-use the individual "states" are classes.

  /*
  class State {
    // Our constructor just defines what each of these states holds.
    constructor() {
      this.data = null;
      this.listeners = [];
    }
    // This get just grabs the data we hold in it, and specifically nothing else.
    get = () => {
      return this.data;
    };
    // This will subscribe a component to this piece of state, and ensure no duplicates exist in our listeners.
    subscribe = listener => {
      this.listeners.push(listener);
      return () =>
        (this.listeners = this.listeners.filter(x => x !== listener));
    };
    // This sets initial data OR modifies our data and updates listeners.
    set = newData => {
      if (this.data !== newData) {
        this.data = newData;
        this.listeners.forEach(x => x(newData));
      }
    };
  }
  */

  // Okay, made a second option here.

  const getter = state => ({
    get: () => state.data,
  });

  const setter = state => ({
    set: newData => {
      if (state.data !== newData) {
        state.data = newData;
        state.listeners.forEach(x => x(newData));
      }
    },
  });

  const subscriber = state => ({
    subscribe: listener => {
      state.listeners.push(listener);
      return () =>
        (state.listeners = state.listeners.filter(x => x !== listener));
    },
  });

  // Closure. We return an anonymous object that can set a piece of state or get a piece of state. BONUS: if nothing is passed into getState it returns a copy of the entire state, useful for debugging.
  return {
    setState(name, data) {
      if (typeof name !== 'string')
        throw new Error('State name must be a string'); // rf

      // Option 1: using classes. This will return extra text every single time it is used.

      /* globalStore[name] = new State(); */

      // Option 2: using functional composition. This way we keep references to functions, allow our code to be modified later if needed with ease, and removes the extra text on each build. Also, allows for minification.
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
    getState(name = null) {
      if (name === null) return { ...globalStore };
      // QUESTION:
      // why not just return original globalStore?
      // reason to spread?

      if (typeof name !== 'string')
        throw new Error('State name must be a string'); // rf

      // if (!globalStore[name]) return false;
      // return globalStore[name];
      return !globalStore[name] ? false : globalStore[name]; // rf
    },
  };
}

// We run our function here and export the store object, again for ease-of-use and likely to be changed.
const Store = createStore();
export default Store;
