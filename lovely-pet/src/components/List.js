import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class List extends Component {
  state = { showingCard: 10 };

  componentDidMount() {
    window.addEventListener("scroll",this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll",this.handleScroll);
  }
  handleScroll = () => {
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    const scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    if (scrollHeight - innerHeight - scrollTop < 100) {
      this.setState({ showingCard: this.state.showingCard + 10 })
    }
  }
  render() {
    const { animalData } = this.props;
    const { showingCard } = this.state;
    return animalData.slice(0,showingCard).map((data) => (
      <Card {...data} key={data._id} />
    ))
  }
}

List.propTypes = {
  animalData: PropTypes.array
}

export default List;