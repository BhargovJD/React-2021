import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, incrementByAmount } from '../features/counter/counterSlice'

function Counter() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    const themeTextColor = useSelector((state) => state.theme.color)



  return (
    <div className="App">
      <h2 style={{color:themeTextColor}}>React Redux Toolkit</h2>

      <h3>{count}</h3>

  <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button onClick={() => dispatch(increment())} type="button" class="btn btn-success">+</button>

  <button  onClick={() => dispatch(decrement())} type="button" class="btn btn-warning">-</button>

  <button  onClick={() => dispatch(incrementByAmount(5))} type="button" class="btn btn-danger">+5</button>

</div>


    </div>
  );
}

export default Counter;
