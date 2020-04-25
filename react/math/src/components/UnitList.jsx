import React from "react";
import UnitItem from "./UnitItem";
import './UnitList.scss';

const UnitList = ({ title, subTitle, unitData, actionData, selectedUnit }) => {
  return (
    <section className="UnitList">
      <div>
        <h2>{title}</h2>
      </div>
      {unitData.map((unit, i) => {
        return (
          <div className="unit-item">
            <UnitItem
              key={unit.id}
              unitInfo={unit}
              index={i}
              actionData={actionData}
              isSelected={unit.id === selectedUnit?.id}/>
          </div>
        )
      })}
    </section>
  )
};

export default UnitList;
