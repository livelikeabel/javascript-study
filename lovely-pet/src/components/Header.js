import React from 'react';

const Header = ({ name,onClickAnimalType }) => {
  return (
    <div>
      <h1>{name}</h1>
      <Tab
        tabList={[
          { name: '냥',type: 'cat' },
          { name: '댕댕이',type: 'dog' }
        ]}
        onClickAnimalType={onClickAnimalType}
      />
    </div>
  )
}

const Tab = ({ tabList,onClickAnimalType }) => {
  return (
    <ul>
      {tabList.map(({ name,type },i) => (
        <li
          onClick={onClickAnimalType.bind(this,type)}
          key={i}
        >
          {name}
        </li>
      ))}
    </ul>
  )
}

export default Header;