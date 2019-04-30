import { Component } from 'react';
import { render } from 'react-dom';

import { Map } from '../map/Map.js';

import BaseInfo from './BaseInfo.jsx';
import Counter from './Counter.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
    this.map = new Map(this);
  }

  setSelected(selected) {
    this.setState({ selected });
  }

  render() {
    const schemeId = this.state.selected;
    return (
      <div className='container'>
        <h1>Housing Monitoring Dashboard</h1>
        <div id='map'></div>
        <div className='row'>
          <div className='col-6'><BaseInfo schemeId={schemeId} /></div>
          <div className='col-6'><Counter schemeId={schemeId} /></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.map.init();
  }
}

const rootElement = document.getElementById('root');

render(
  <App />, rootElement
)
