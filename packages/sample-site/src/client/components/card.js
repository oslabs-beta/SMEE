/* eslint-disable react/prop-types */
import React from 'react';
import { useStore } from '@smee/smee/useStore';
import { Store } from '@smee/smee/store';

function changeState(action) {
  const state = Store.getState(action.stateName);

  switch (action.case) {
    case 'add':
      state.set(state.data + 1);
      break;
    default:
  }
}

function TotalCount() {
  const total = useStore('totalCount', 0);
  return <h1>Total: {total}</h1>;
}

function Container() {
  const arr = Array.from({ length: 6 }, (_, i) => {
    return <Card index={i} key={i} />;
  });
  return (
    <div className="card-container">
      <TotalCount />
      {arr}
    </div>
  );
}

function Card(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const num = useStore(`count${props.index}`, 0);
  return (
    <div className="card">
      <h3>Counter: {num}</h3>
      <button
        type="button"
        onClick={() => {
          changeState({
            case: 'add',
            stateName: `count${props.index}`,
          });
          changeState({
            case: 'add',
            stateName: 'totalCount',
          });
        }}
      >
        Add 1
      </button>
    </div>
  );
}

export default Container;
