import './style/style.scss';
import { render } from 'react-dom';

import App from './app/App.js';

const app = new App();

render(
  app.render(),
  document.getElementById('root')
)

app.map.init();