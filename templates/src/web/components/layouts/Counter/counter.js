import React from 'react';

const Counter = props => {
  let counterVal = props.counter;
  const increment = () => props.setCounter(++counterVal);
  const decrement = () => props.setCounter(--counterVal);

  return (
    <div className='center-div '>
      <div className='counter'>
        <button onClick={decrement} className='butt'>-</button>
        <div className='counter'>{counterVal}</div>
        <button onClick={increment} className='butt'>+</button>
      </div>
    </div>
  );
};

export default Counter;
