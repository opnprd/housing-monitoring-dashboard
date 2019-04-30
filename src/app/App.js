import { Component } from 'react';

import { Map } from '../map/Map.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.map = new Map();
  }

  render() {
    return <div id='map'/>;
  }
}
