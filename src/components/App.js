import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
const CONTAINER_SIZE = 4;
const START_BUDGET = 100;

function App() {
  const [sushi, setSushi] = useState([]);
  const [sushiStart, setSushiStart] = useState(0);
  const [budget, setBudget] = useState(START_BUDGET)

  useEffect(
    () => 
      fetch(API)
        .then(res => res.json())
        .then(json => setSushi(json)),
    []
  );

  function showMore() {
    setSushiStart(sushiStart + CONTAINER_SIZE);
  }

  function eatSushi(piece) {
    if (piece.eaten || budget - piece.price < 0) {
      return;
    }

    setBudget(budget - piece.price);

    setSushi(
      sushi.map(s => s.id === piece.id  ?  {...piece, eaten: true} : s)
      );
  }

  return (
    <div className="app">
      <SushiContainer 
      eatSushi={eatSushi}
      showMore={showMore}
      sushi={sushi.slice(sushiStart, sushiStart + CONTAINER_SIZE)} />
      <Table budget={budget} plates={sushi.filter(p => p.eaten)} />
    </div>
  );
}

export default App;
