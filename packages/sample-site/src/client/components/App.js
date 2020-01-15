// import React, { useState } from 'react';
// import Button from './button';

// export default function App(props) {
//   // eslint-disable-next-line react/prop-types
//   const { name } = props;

//   // useState takes our initial state as a parameter
//   const [count, setCount] = useState(0);
//   const buttons = [];

//   const handleCount = () => {
//     setCount(count + 1);
//   };

//   for (let i = 0; i <= count; i += 1) {
//     buttons.push(<Button click={handleCount} key={i} />);
//   }

//   return (
//     <div>
//       <h1>Hello I&rsquo;m {name}.</h1>
//       <img
//         style={{ height: '200px', width: '160px' }}
//         src="https://www.coleka.com/media/item/201702/22/pop-disney-disney-treasures-mr-smee.jpg"
//         alt="Mr. Smee"
//       />

//       <div id="container-button">
//         <h3>{count}</h3>
//         {buttons}
//       </div>
//     </div>
//   );
// }

import React from 'react';

export default function App() {
  return <h1>Hello world</h1>;
}
