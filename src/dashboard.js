import './style/style.scss';
import ReactDOM from 'react-dom';

import App from './app';

const app = new App();

ReactDOM.render(
  app.render(),
  document.getElementById('root')
)

app.map.init();

