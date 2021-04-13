import React from 'react';
import { View, Flex, Grid } from '@adobe/react-spectrum';

import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';
import { ArticlesProvider } from '../../context/articles';
import { RouteComponentProps } from '@reach/router';

export function Home(props: RouteComponentProps) {
  return (
    <div className='home-page'>
      <Banner />
      <div className='container page'>
        <div className='row'>
          <ArticlesProvider>
            <MainView />
            <Tags />
          </ArticlesProvider>
        </div>
      </div>
    </div>
  );
}

export function RHome(props: RouteComponentProps) {
  return (
    <Grid
      areas={['mainView tagsView']}
      columns={['3fr', '1fr']}
      marginX='size-1000'
    >
      <ArticlesProvider>
        <View gridArea='mainView' padding='size-500'>
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
