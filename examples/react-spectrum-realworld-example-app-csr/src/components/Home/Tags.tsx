import * as React from 'react';
import { View, Flex, Grid, Button } from '@adobe/react-spectrum';

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
          setTags((payload as any).data.tags);
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
    <View gridArea='tagsView' marginTop='size-400' maxWidth='size-3600'>
      <View padding='size-200' backgroundColor='gray-200'>
        <p>Popular Tags</p>
        {loading ? (
          <div>Loading Tags...</div>
        ) : (
          <View>
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
          </View>
        )}
      </View>
    </View>
  );
}

export default Tags;
