import './index.css';

import * as React from 'react';

import { Accordion, Button, Item, Provider, View, defaultTheme } from './index';

export function App(props = {}) {
  return (
    <Provider theme={defaultTheme}>
      {/* <Button variant='cta'>Hello spectrum</Button> */}
      <div style={{ width: '480px', margin: '24px' }}>
        <Accordion {...props}>
          <Item
            key='files'
            title='Your files'
            // UNSAFE_style={{}}
          >
            files
          </Item>
          <Item key='shared' title='Shared with you'>
            shared
          </Item>
          <Item key='last' title='Last item'>
            last
          </Item>
        </Accordion>
      </div>
    </Provider>
  );
}

export default App;
