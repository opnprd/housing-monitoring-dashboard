import { Component } from 'react';
import { render } from 'react-dom';

import { Map } from '../map/Map.js';

import BaseInfo from './BaseInfo.jsx';
import PropertyCount from '../inferencers/propertyCount/View.jsx';
import EventStream from '../visualisers/eventStream/View.jsx'
import CouncilTaxBands from '../visualisers/councilTaxBands/View.jsx';

import { getEventsForScheme } from '../resources/events';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      events: [],
    };
    this.map = new Map(this);
  }

  async setSelected(selected) {
    const events = await getEventsForScheme(selected);
    this.setState({ selected, events });
  }

  clearSelected() {
    this.setState({ selected: null, events: []});
  }

  render() {
    const schemeId = this.state.selected;
    const events = this.state.events;

    let schemeDisplay = <div className='col-12'>Select a scheme on the map above.</div>
    if (schemeId) {
      schemeDisplay = <>
        <div className='col-6'><EventStream events={events} /></div>
        <div className='col-6'>
          <PropertyCount schemeId={schemeId} events={events}/>
          <CouncilTaxBands events={events}/>
          <BaseInfo schemeId={schemeId} events={events}/>
        </div>
      </>;
    }

    return (
      <div className='container'>
        <h1>Housing Monitoring Dashboard</h1>
        <div id='map'></div>
        <div className='row'>{ schemeDisplay }</div>
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
