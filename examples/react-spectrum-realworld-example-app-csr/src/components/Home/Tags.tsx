import React from 'react';
import { View, Flex, Grid } from '@adobe/react-spectrum';

import { getTags } from '../../api/TagsAPI';
import useArticles from '../../context/articles';

function Tags() {
  const [tags, setTags] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const { dispatch } = useArticles();

  React.useEffect(() => {
    let ignore = false;

    async function fetchTags() {
      setLoading(true);
      try {
        const payload = await getTags();
        if (!ignore) {
          setTags(payload.data.tags);
        }
      } catch (error) {
        console.log(error);
      }
      if (!ignore) {
        setLoading(false);
      }
    }

    fetchTags();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    // <div className='sidebar'>
    <View
      backgroundColor='gray-200'
      padding='size-200'
      marginTop='size-400'
      maxWidth='size-3600'
    >
      <p>Popular Tags</p>
      {loading ? (
        <div>Loading Tags...</div>
      ) : (
        <div className='tag-list'>
          {tags.map((tag) => (
            <button
              key={tag}
              className='tag-pill tag-default'
              onClick={() =>
                dispatch({
                  type: 'SET_TAB',
                  tab: { type: 'TAG', label: tag },
                })
              }
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </View>
    // </div>
  );
}

export default Tags;
