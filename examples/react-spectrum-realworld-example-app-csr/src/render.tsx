import * as React from 'react';

import { App } from './App';
import ReactDOM from 'react-dom';

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
};

render(App);

if ((module as any).hot) {
  (module as any).hot.accept('./App.tsx', () => {
    render(App);
  });
}
