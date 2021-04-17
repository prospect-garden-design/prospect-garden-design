import * as React from 'react';
import { View, Flex, Grid } from '@adobe/react-spectrum';

import ArticleActions from './ArticleActions';
import { IArticle } from '../../types';
import { ArticleAction } from '../../reducers/article';
import ArticleAvatar from '../common/ArticleAvatar';

type ArticleMetaProps = {
  article: IArticle;
  dispatch: React.Dispatch<ArticleAction>;
};

function ArticleMeta({ article, dispatch }: ArticleMetaProps) {
  return (
    <Flex gap='size-100' alignItems='end'>
      <ArticleAvatar article={article} />
      <ArticleActions article={article} dispatch={dispatch} />
    </Flex>
  );
}

export default React.memo(ArticleMeta);
