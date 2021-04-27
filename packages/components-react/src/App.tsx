import './index.css';

import * as React from 'react';

import { Button, Provider, defaultTheme } from './index';

export function App() {
  return (
    <Provider theme={defaultTheme}>
      <Button variant='cta'>Hello</Button>
    </Provider>
  );
}

export default App;
