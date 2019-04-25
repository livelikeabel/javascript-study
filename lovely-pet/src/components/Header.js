import React, { createRef, Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

const SELECTED_STYLE = { color: '#111', borderBottom: '2px solid #111' };

const Header = ({ name, animalType, onClickAnimalType }) => {
  return (
    <div className="Header">
      <h1>{name}</h1>
      <Tab
        tabList={[
          { name: '냥이', type: 'cat' },
          { name: '댕댕', type: 'dog' }
        ]}
        animalType={animalType}
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
    const { tabList, animalType, onClickAnimalType } = this.props;

    return (
      <ul className="Tab" ref={this.tabRef}>
        {tabList.map(({ name, type }, i) => (
          <li
            style={animalType === type ? SELECTED_STYLE : {}}
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

Header.propTypes = {
  name: PropTypes.string,
  animalType: PropTypes.string,
  onClickAnimalType: PropTypes.func
}

export default Header;