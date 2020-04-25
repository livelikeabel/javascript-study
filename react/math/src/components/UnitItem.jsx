import React from "react";
import './UnitItem.scss';
import Button from './Button';

const UnitItem = ({ unitInfo, index, actionData, isSelected }) => {
  const { id, problemType, unitName, problemURL } = unitInfo;
  return (
    <div className="UnitItem">
      <div className="header">
        <p>{problemType}</p>
        <p>{unitName}</p>
        {actionData.map(d => {
          return (
            <Button
              onClick={() => d.action(id)}
              active={isSelected && d.name === '유사문항'}>
              {d.name}
            </Button>
          )
        })}
      </div>
      <div className="content">
        <div className="number">{index + 1}</div>
        <img src={problemURL} alt={`problem: ${unitName}`}/>
      </div>
    </div>
  )
};

export default UnitItem;
