import React from 'react';
import { useSelector } from 'react-redux'




function Counter2() {
    const coin = useSelector((state) => state.counter.count)
    const themeTextColor = useSelector((state) => state.theme.color)


  return <div>
      <h2 style={{color:themeTextColor}}>Coin: {coin}</h2>


  </div>;
}

export default Counter2;
