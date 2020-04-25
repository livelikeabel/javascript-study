import React from "react";
import './UnitItem.scss';

const UnitItem = ({ unitInfo, index }) => {
  const { problemType, unitName, problemURL } = unitInfo;
  return (
    <div className="UnitItem">
      <div className="header">
        <p>{problemType}</p>
        <p>{unitName}</p>
        <button>btn1</button>
        <button>btn2</button>
      </div>
      <div className="content">
        <div className="number">{index + 1}</div>
        <img src={problemURL} alt={`problem: ${unitName}`}/>
      </div>
    </div>
  )
};

export default UnitItem;
