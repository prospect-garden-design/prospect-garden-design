import * as React from 'react';
import { useEffect } from 'react';
import { ITab } from '../reducers/articleList';
import { ArticlesProvider } from '../context/articles';
import TabList from './common/TabList';
import ArticleList from './ArticleList';

function ProfileArticles({ username }: { username: string }) {
  const tabsData: Array<ITab> = [
    { type: 'AUTHORED', label: 'My Articles', username },
    {
      type: 'FAVORITES',
      label: 'Favorited Articles',
      username,
    },
  ];

  return (
    <ArticlesProvider>
      <TabList data={tabsData} />
      <ArticleList />
    </ArticlesProvider>
  );
}

export default React.memo(ProfileArticles);
