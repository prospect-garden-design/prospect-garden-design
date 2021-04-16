import React from 'react';
import { Link } from '@reach/router';
import { View, Flex, Grid, Text, Heading } from '@adobe/react-spectrum';

import { IArticle } from '../../types';
import { ALT_IMAGE_URL } from '../../utils';

type ArticleAvatarProps = {
  article: IArticle;
};

export default function ArticleAvatar({
  article: { author, createdAt },
}: ArticleAvatarProps) {
  return (
    <Flex gap='size-100' justifyContent='start' alignItems='center'>
      <Link to={`/${author.username}`}>
        <img
          src={author.image || ALT_IMAGE_URL}
          alt={author.username}
          style={{ height: '32px', borderRadius: '30px' }}
        />
      </Link>

      <Grid>
        <Link className='author' to={`/${author.username}`}>
          {author.username}
        </Link>
        <span className='date'>{new Date(createdAt).toDateString()}</span>
      </Grid>
    </Flex>
  );
}
