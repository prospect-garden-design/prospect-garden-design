import * as React from 'react';
import { View, Flex, Grid, Button } from '@adobe/react-spectrum';

import ArticleList from '../ArticleList';
import TabList from '../common/TabList';
import { ITab } from '../../reducers/articleList';

const tabsData: Array<ITab> = [
  { type: 'FEED', label: 'Your Feed' },
  { type: 'ALL', label: 'Global Feed' },
];

export function RMainView() {
  return (
    <View gridArea='mainView'>
      <TabList data={tabsData} />
      <ArticleList />
    </View>
  );
}

export default RMainView;
