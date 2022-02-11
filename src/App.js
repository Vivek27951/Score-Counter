import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./components/actions";

const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "200px",
        }}
      >
        <h1 style={{ margin: "0px" }}>Increment/Decrement counter</h1>
        <h3 style={{ marginTop: "0px" }}>using React & Redux</h3>
        <div
          style={{
            display: "flex",
            backgroundColor: "#dee0ee",
            borderRadius: "20px",
          }}
        >
          <button
            onClick={() => dispatch(decrement())}
            style={{
              padding: "20px",
              backgroundColor: "#dee0ee",
              fontSize: "20px",
              borderStyle: "none",
              borderRadius: "20px",
              fontSize: "30px",
              color: "blue",
            }}
          >
            -
          </button>
          <input
            type="text"
            value={count}
            style={{
              width: "60px",
              textAlign: "center",
              borderTop: "4px solid #dee0ee",
              borderLeft: "4px solid #dee0ee",
              borderRight: "4px solid #dee0ee",
              borderBottom: "4px solid #dee0ee",
              fontSize: "30px",
              color: "red",
            }}
          />
          <button
            onClick={() => dispatch(increment(1))}
            style={{
              padding: "20px",
              backgroundColor: "#dee0ee",
              fontSize: "20px",
              borderStyle: "none",
              borderRadius: "20px",
              fontSize: "30px",
              color: "blue",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
