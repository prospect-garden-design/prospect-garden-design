import * as React from 'react';

import { Flex, Grid, View } from '@adobe/react-spectrum';

import { ArticleAction } from '../../reducers/article';
import ArticleActions from './ArticleActions';
import ArticleAvatar from '../common/ArticleAvatar';
import { IArticle } from '../../types';

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
