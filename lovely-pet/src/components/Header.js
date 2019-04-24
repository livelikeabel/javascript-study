import React, { createRef, Component } from 'react';
import './Header.scss';

const Header = ({ name, onClickAnimalType }) => {
  return (
    <div className="Header">
      <h1>{name}</h1>
      <Tab
        tabList={[
          { name: '냥', type: 'cat' },
          { name: '댕댕이', type: 'dog' }
        ]}
        onClickAnimalType={onClickAnimalType}
      />
    </div>
  )
}

class Tab extends Component {
  constructor(props) {
    super(props);
    this.tabRef = createRef();
  }
  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }
  _handleScroll = () => {
    const sticky = this.tabRef.current;
    if (window.pageYOffset > sticky.offsetTop) {
      sticky.classList.add("sticky")
    } else {
      sticky.classList.remove("sticky")
    }
  }
  render() {
    const { tabList, onClickAnimalType } = this.props;
    return (
      <ul className="Tab" ref={this.tabRef}>
        {tabList.map(({ name, type }, i) => (
          <li
            onClick={onClickAnimalType.bind(this, type)}
            key={i}
          >
            {name}
          </li>
        ))}
      </ul>
    )
  }
}

export default Header;