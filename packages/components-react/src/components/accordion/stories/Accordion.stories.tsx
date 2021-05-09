import * as React from 'react';

import { Item } from '@react-stately/collections';

import { Accordion } from '../src/Accordion';

export function SimpleAccordion(props) {
  return (
    <Accordion>
      <Item key='files' title='Your files 11'>
        files
      </Item>
      <Item key='shared' title='Shared with you'>
        shared
      </Item>
    </Accordion>
  );
}
