import React from 'react';
import ReactDOM from 'react-dom';

import getSchemesReport from '../resources/reports';

import Summary from '../reports/Summary.jsx';

const rootElement = document.getElementById('root');

class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportData: null,
    }
    this.updateReport();
  }

  async updateReport() {
    this.setState({ reportData: await getSchemesReport()});
  }

  render() {
    const { reportData } = this.state;

    let report = (<div>Loading report...</div>);

    if ( reportData !== null ) {
      report = <Summary data={ reportData }/>;
    }

    return (
      <div className='container'>
      <h1>Housing Monitoring Report</h1>
      { report }
      </div>
    );
  }
}

ReactDOM.render(
  <Report />,
  rootElement
)
