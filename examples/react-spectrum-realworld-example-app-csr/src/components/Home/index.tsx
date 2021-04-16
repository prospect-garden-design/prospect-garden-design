import React from 'react';
import { View, Flex, Grid } from '@adobe/react-spectrum';

import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';
import { ArticlesProvider } from '../../context/articles';
import { RouteComponentProps } from '@reach/router';

export function RHome(props: RouteComponentProps) {
  return (
    <Grid
      areas={['mainView tagsView']}
      columns={['3fr', '1fr']}
      columnGap='size-300'
      marginX='size-1000'
    >
      <ArticlesProvider>
        <View gridArea='mainView'>
          <MainView />
        </View>
        <View gridArea='tagsView'>
          <Tags />
        </View>
      </ArticlesProvider>
    </Grid>
  );
}

// export default Home;
export default RHome;
