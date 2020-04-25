import React, { Component } from 'react';
import './App.scss';
import { getProblems, getSimilars } from './api';
import UnitList from "./components/UnitList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problemUnitList: [],
      similarUnitList: [],
      selectedUnit: null
    };
  }

  componentDidMount() {
    getProblems().then(({ data }) => {
      this.setState({ problemUnitList: data });
    });
    getSimilars().then(({ data }) => {
      this.setState({ similarUnitList: data });
    });
  }

  selectUnit(unitId) {
    const selectedUnit = this.state.problemUnitList.find(v => v.id === unitId);
    this.setState({ selectedUnit });
  }

  deleteUnit(unitId) {
    this.setState({
      problemUnitList: this.state.problemUnitList.filter(_unit => _unit.id !== unitId)
    })
  }

  addUnit(unitId) {
    const { problemUnitList, similarUnitList, selectedUnit } = this.state;
    const targetUnit = similarUnitList.find(v => v.id === unitId);
    const selectedUnitIdx = problemUnitList.findIndex(v => v.id === selectedUnit.id);
    this.setState({
      problemUnitList: [
        ...problemUnitList.slice(0, selectedUnitIdx + 1),
        targetUnit,
        ...problemUnitList.slice(selectedUnitIdx + 1)
      ],
      similarUnitList: similarUnitList.filter(_unit => _unit.id !== unitId),
    })
  }

  swapUnit(unitId) {
    const { problemUnitList, similarUnitList, selectedUnit } = this.state;
    const targetUnit = similarUnitList.find(v => v.id === unitId);
    const targetUnitIdx = similarUnitList.findIndex(v => v.id === unitId);
    const selectedUnitIdx = problemUnitList.findIndex(v => v.id === selectedUnit.id);
    this.setState({
      problemUnitList: [
        ...problemUnitList.slice(0, selectedUnitIdx),
        targetUnit,
        ...problemUnitList.slice(selectedUnitIdx + 1)
      ],
      similarUnitList: [
        ...similarUnitList.slice(0, targetUnitIdx),
        selectedUnit,
        ...similarUnitList.slice(targetUnitIdx + 1)
      ]
    })
  }

  render() {
    const { problemUnitList, similarUnitList, selectedUnit } = this.state;
    const problemActions = [
      { name: '유사문항', action: unitId => this.selectUnit(unitId) },
      { name: '삭제', action: unitId => this.deleteUnit(unitId) }
    ];
    const similarActions = [
      { name: '추가', action: unitId => this.addUnit(unitId) },
      { name: '교체', action: unitId => this.swapUnit(unitId) }]
    ;
    return (
      <div className="App">
        <UnitList
          title={"학습지 상세 편집"}
          unitData={problemUnitList}
          actionData={problemActions}
          selectedUnit={selectedUnit}
        />
        <UnitList
          title={"문항 교체/추가"}
          subTitle={""}
          unitData={similarUnitList}
          actionData={similarActions}
        />
      </div>
    );
  }
}

export default App;
