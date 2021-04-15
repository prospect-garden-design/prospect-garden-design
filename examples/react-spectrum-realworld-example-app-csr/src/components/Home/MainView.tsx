import React from 'react';
import { View, Flex, Grid, Button } from '@adobe/react-spectrum';

import ArticleList from '../ArticleList';
import TabList from '../common/TabList';
import { ITab } from '../../reducers/articleList';

const tabsData: Array<ITab> = [
  { type: 'FEED', label: 'Your Feed' },
  { type: 'ALL', label: 'Global Feed' },
];

export function MainView() {
  return (
    <div className='col-md-9'>
      <div className='feed-toggle'>
        <TabList data={tabsData} />
      </div>
      <ArticleList />
    </div>
  );
}

export function RMainView() {
  return (
    <div>
      <div className='feed-toggle'>
        <TabList data={tabsData} />
      </div>
      <ArticleList />
    </div>
  );
}

// export default MainView;
export default RMainView;
