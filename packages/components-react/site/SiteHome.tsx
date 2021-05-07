import * as React from 'react';
import { Link } from 'react-router-dom';

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
    <div style={{ flex: `0 0 auto` }}>
      <div
        style={{
          display: `flex`,
          minHeight: `100vh`,
          flexFlow: `wrap column`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <h1> react components for prospect garden design system</h1>
        <h2>
          <Link to='/docs'>documentation</Link>
        </h2>
        <div>
          <Accordion>
            <Item key='files' title='Your files'>
              files
            </Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
