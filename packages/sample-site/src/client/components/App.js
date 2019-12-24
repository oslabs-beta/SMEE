import React from 'react';
import math from '@smee/exported';

export default function App(props) {
  console.log(props);
  const four = math.add(2, 2);
  // eslint-disable-next-line react/prop-types
  const { name } = props;
  console.log(name, typeof name);
  return (
    <div>
      <h1>Hello I'm {name}.</h1>
      <img
        style={{ height: '200px', width: '160px' }}
        src="https://www.coleka.com/media/item/201702/22/pop-disney-disney-treasures-mr-smee.jpg"
        alt="Mr. Smee"
      />
      <h2>I'm using a React function component.</h2>
      <p>2 + 2 is {four}</p>
    </div>
  );
}
