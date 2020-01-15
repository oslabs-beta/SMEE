# **SMEE**
## _State Management: Extra Easy_

**_HOW TO USE SMEE v1.0_**
​

### **What is SMEE?**

**SMEE** stands for _State-management: Extra Easy_, meaning the amount of work you have to do is reduced greatly in comparison to other state-management options.
​

### **Why use SMEE?**

**SMEE** is an easy to use [React](https://reactjs.org/) hook to access, modify, and display your apps state in any component, on any level, globably.
​

### **Why Hooks?**

Hooks are a bleeding-edge [React](https://reactjs.org/) feature allowing you to 'hook' into any component using the functions they provide, removing the need to prop drill down and allowing functional components to shine. They both simplify the amount of code needed to write and improve overall readability as a user entering the codebase.


**SMEE** uses hooks due to the ease of writing they provide and the removal of abstractions for _you_ the user. With hooks like `useState` you are able to build custom hooks that do exactly what it says on the tin.
​

### **How to Get Started**

First, download and install the package.

```sh
 npm install smee 
 ```

Now let's make a basic component that needs state. Say, a simple counter.
​
```js
const Counter = () => {
  return <h1>Counter</h1>;
};
```
​
Now, in place of your `useState` hook, use SMEE's `useStore` hook. But hold on... It doesn't work EXACTLY like the `useState` hook... The syntax is a little different. The `useStore` hook allows for two inputs; the name of the state as a string, and the value of that state. If you include the value, it will assume you are attempting to alter the value, or add a new value if the input string does not exist as a piece of state in the global store. So, let's say we want to add a counter state that our counting component will alter. We would type the following:
​
```js
const Counter = () => {
  const count = useStore('count', 0);
  return <h1>Counter: {count}</h1>;
};
```
​
Or, if we have the state defined elsewhere, we can use that same hook to grab it from the store.
​
```js
const Counter = () => {
  const count = useStore('count', 0);
  return <h1>Counter: {count}</h1>;
};
```
​
Just like that, a global piece of state is added to the global store. Using it is just as simple. The `useStore` provided us with the value that was either created or pulled out from the global store.
​

Now we need to modify that value. Let's make a button that updates the counter using the `setStore` function. `setStore` takes a string representing the requested state, and a callback that determines what is done to that state.
​
```js
const Counter = () => {
  const count = useStore('count', 0);
  return <h1>Counter: {count}</h1>;
};
const CounterUpdate = () => {
  return <button onClick={() => setStore('count', () => count + 1)} />;
};
```
​
Where you do this is up to you. Wanna do it right in your component? Go for it! Wanna do it on a separate page? Works just as well. Make a reducer page that will handle all the logic, pass it these values and alter them there. There is even a `createStore` function for generating initial state, making other developers working on your project have less headaches. `createStore` takes in an object containing all initial data for your project. Need to make multiple initial states? No problem. Use this function as often as you want, all data is pushed into the same global store.
​
```js
createStore({
  count: 0,
});
```
​
And there you have it! Global state management has never been so easy.