import React, { useState } from 'react';

const button = props => {
  const [count, setCount] = useState(0);
  const { click } = props;

  console.log(click);

  const setClick = () => {
    click();
    setCount(count + 1);
  };

  // const [dblClick, setDblClick]

  return (
    <button onClick={setClick} type="button">
      {count}
    </button>
  );
};

export default button;
