"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <section className="counter-container">
      <div className="counter-card">
        <h2 className="counter-title">
          Compteur interactif
        </h2>

        <div className="counter-display">
          {count}
        </div>

        <div className="button-group">
          <button
            onClick={decrement}
            className="btn btn-danger"
          >
            -
          </button>

          <button
            onClick={reset}
            className="btn btn-secondary"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="btn btn-success"
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
}