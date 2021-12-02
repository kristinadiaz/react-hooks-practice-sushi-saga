import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, showMore, eatSushi }) {
  // console.log(sushi)

  return (
    <div className="belt">
      {
      sushi.map((sushiData) => <Sushi key={sushiData.id} sushi={sushiData} handleClick={eatSushi} /> )
      }
      <MoreButton handleClick={showMore}/>
    </div>
  );
}

export default SushiContainer;
