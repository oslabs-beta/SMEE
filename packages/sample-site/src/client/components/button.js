import React, { useState } from 'react';

const button = props => {
  const [count, setCount] = useState(0);
  // eslint-disable-next-line react/prop-types
  const { click } = props;

  const setClick = () => {
    click();
    setCount(count + 1);
  };

  return (
    <button onClick={setClick} type="button">
      {count}
    </button>
  );
};

export default button;
