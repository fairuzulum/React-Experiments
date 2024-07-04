import { useReducer, React } from 'react';
import { Link } from 'react-router-dom';

const initialState = { 
    count: 0 
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };

    }
}

export default function Hook() {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="card">
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => dispatch({ type: 'decrement' })}
        >
          -
        </button>
        <h1>count is {state.count}</h1>

        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => dispatch({ type: 'increment' })}
        >
          +
        </button>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </>
  )
}
