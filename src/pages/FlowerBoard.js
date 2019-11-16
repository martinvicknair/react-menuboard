import React, { Component } from 'react';
import FlowerList from '../utils/FlowerList';
import axios from 'axios';
// import './App.css';


const FLOWER_LIST_URL = 'http://localhost:3001/flowers'

class FlowerBoard extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this.state = {
      isFetching: false,
      flowers: ['1']};
  }
  render() {
    const title = 'Quotes for ya!'
    return (
      <div className='App'>
        <h2 className='App-title'>{title}</h2>
        <p>{this.state.isFetching ? 'Fetching quotes...' : ''}</p>
        <FlowerList flowers={this.state.flowers} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchFlowers()
    this.timer = setInterval(() => this.fetchFlowers(), 8000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  fetchFlowers = () => {
    this.setState({...this.state, isFetching: true})
    axios.get(FLOWER_LIST_URL)
      .then(response => {
        this.setState({flowers: response.data, isFetching: false})
      })
      .catch(e => console.log(e));
  }

}

export default FlowerBoard
