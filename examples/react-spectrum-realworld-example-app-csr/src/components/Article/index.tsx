import React from 'react';
import { View, Flex, Grid } from '@adobe/react-spectrum';

import marked from 'marked';
import ArticleMeta from './ArticleMeta';
import ArticleTags from '../common/ArticleTags';
import CommentContainer from './CommentContainer';
import { RouteComponentProps } from '@reach/router';
import { articleReducer, initialState } from '../../reducers/article';
import { getArticleComments } from '../../api/CommentsAPI';
import { getArticle } from '../../api/ArticlesAPI';

export default function Article({
  slug = '',
}: RouteComponentProps<{ slug: string }>) {
  const [{ article, comments, loading, error }, dispatch] = React.useReducer(
    articleReducer,
    initialState,
  );

  React.useEffect(() => {
    dispatch({ type: 'FETCH_ARTICLE_BEGIN' });
    let ignore = false;

    const fetchArticle = async () => {
      try {
        const [articlePayload, commentsPayload] = await Promise.all([
          getArticle(slug),
          getArticleComments(slug),
        ]);
        if (!ignore) {
          dispatch({
            type: 'FETCH_ARTICLE_SUCCESS',
            payload: {
              article: articlePayload.data.article,
              comments: commentsPayload.data.comments,
            },
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: 'FETCH_ARTICLE_ERROR',
          error,
        });
      }
    };

    fetchArticle();
    return () => {
      ignore = true;
    };
  }, [dispatch, slug]);

  const convertToMarkdown = (text: string) => ({
    __html: marked(text, { sanitize: true }),
  });

  return (
    article && (
      <View>
        <View
          paddingY='size-160'
          backgroundColor='gray-900'
          UNSAFE_style={{ color: '#fff' }}
        >
          <Grid
            rowGap='size-200'
            marginX='size-2400'
            marginY='size-400'
            backgroundColor='blue-600'
          >
            <h1>{article.title}</h1>
            <ArticleMeta article={article} dispatch={dispatch} />
          </Grid>
        </View>

        <View marginX='size-2400' marginY='size-400'>
          <div className=''>
            <p dangerouslySetInnerHTML={convertToMarkdown(article.body)} />
            <ArticleTags tagList={article.tagList} />
            <hr style={{ color: '#333' }} />
          </div>

          <Grid justifyContent='center' rowGap='size-400' marginTop='size-400'>
            <ArticleMeta article={article} dispatch={dispatch} />

            <CommentContainer
              comments={comments}
              slug={slug}
              dispatch={dispatch}
            />
          </Grid>
        </View>
      </View>
    )
  );
}
