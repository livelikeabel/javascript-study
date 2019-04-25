import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './List.scss';
import Card from './Card';
import Loading from './Loading';

class List extends Component {
  state = { showingCard: 10 };

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.animalType !== this.props.animalType) {
      this.setState({ showingCard: 10 })
      const { documentElement, body } = document;
      if (documentElement) documentElement.scrollTop = 0;
      // Safari
      body.scrollTop = 0;
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }
  _handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    //document.body // Safari
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 100 && !this.props.isLoading) {
      this._shwoMore()
    }
  }

  _shwoMore = () => {
    const { onChangeToggleLoading } = this.props;
    onChangeToggleLoading(true);
    setTimeout(() => {
      this.setState({ showingCard: this.state.showingCard + 10 })
      onChangeToggleLoading(false)
    }, 750);
  }

  render() {
    const { animalData } = this.props;
    const { showingCard } = this.state;
    if (!animalData.length) return <Loading/>;
    return (
      <div className="List">
        <div className="List__inner">
          {animalData.slice(0, showingCard).map((data) => (
            <Card {...data} key={data._id} />
          ))}
        </div>
      </div>
    )
  }
}

List.defaultProps = {
  animalData: []
}

List.propTypes = {
  animalData: PropTypes.array,
  onChangeToggleLoading: PropTypes.func,
  isLoading: PropTypes.bool
}

export default List;