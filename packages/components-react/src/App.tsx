import './index.css';

import * as React from 'react';

import { Accordion, Button, Item, Provider, defaultTheme } from './index';

export function App(props = {}) {
  return (
    <Provider theme={defaultTheme}>
      <Button variant='cta'>Hello spectrum</Button>
      <Accordion {...props}>
        <Item key='files' title='Your files'>
          files
        </Item>
        <Item key='shared' title='Shared with you'>
          shared
        </Item>
        <Item key='last' title='Last item'>
          last
        </Item>
      </Accordion>
    </Provider>
  );
}

export default App;
