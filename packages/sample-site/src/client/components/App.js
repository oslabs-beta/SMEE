import React from 'react';

export default function App(props) {
  console.log(props);
  // eslint-disable-next-line react/prop-types
  const { name } = props;
  console.log(name, typeof name);
  return <h1>Hello {name}, from React func comp</h1>;
}
