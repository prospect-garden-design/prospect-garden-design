import React from 'react';
import { Link } from '@reach/router';
import { View, Flex, Grid, Text, Heading } from '@adobe/react-spectrum';

import ArticleAvatar from './common/ArticleAvatar';
import ArticleTags from './common/ArticleTags';
import FavoriteButton from './common/FavoriteButton';
import { IArticle } from '../types';
import { ArticleListAction } from '../reducers/articleList';

type ArticlePreviewProps = {
  article: IArticle;
  dispatch: React.Dispatch<ArticleListAction>;
};

export default function ArticlePreview({
  article,
  dispatch,
}: ArticlePreviewProps) {
  return (
    <Grid UNSAFE_style={{ borderTop: '1px solid rgba(0,0,0,.1)' }}>
      <Flex justifyContent='space-between' marginY='size-200'>
        <ArticleAvatar article={article} />
        <FavoriteButton article={article} dispatch={dispatch}>
          {article.favoritesCount}
        </FavoriteButton>
      </Flex>

      <Heading level={5}>{article.title}</Heading>
      <p>{article.description}</p>

      <Flex
        justifyContent='space-between'
        // alignItems='top'
        marginY='size-200'
      >
        <Link to={`/article/${article.slug}`} className='preview-link'>
          <span>Read more...</span>
        </Link>
        <ArticleTags tagList={article.tagList} />
      </Flex>
    </Grid>
  );
}
