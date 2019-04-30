import { Component } from 'react';

import { Map } from '../map';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.map = new Map();
  }

  render() {
    return this.map.render();
  }
}

