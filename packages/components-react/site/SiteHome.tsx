import * as React from 'react';

import ReadmeMdx from '../README.md';
import AccordionMdx from '../src/components/accordion/Accordion.docs.mdx';
import {
  Accordion,
  Button,
  Item,
  Provider,
  View,
  darkTheme,
  defaultTheme,
  lightTheme,
} from '../src/index';

export function SiteHome(props) {
  return (
    <div>
      <h1>Site首页: react components for pgd</h1>
      <h2>again</h2>
      <AccordionMdx />
      <h2>again</h2>
      <h2>again</h2>
      <h2>again</h2>
      <ReadmeMdx />
      <Button variant='cta'>tt</Button>
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
    </div>
  );
}
