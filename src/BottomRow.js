import React, { useState } from "react";
import "./App.css";


const BottomRow = () => {

  const [quarterNum, setQuarter] = useState(1);
  

  
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarterNum}</div>
      </div>
      <button
      onClick={() =>
        {setQuarter(quarterNum +1)
        if (quarterNum > 3) {
          document.location.reload(true)
          alert('End of game!')
        }}
        
      }
      className="buttons">Change Quarter</button>
    </div>
  );
  
};
export default BottomRow;
