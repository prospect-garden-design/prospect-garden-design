// import './index.css';

import * as React from 'react';
import { Suspense, lazy, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {
  Accordion,
  Button,
  Item,
  Provider,
  View,
  darkTheme,
  defaultTheme,
  lightTheme,
} from '../src/index';
import { SiteHome } from './SiteHome';
import { CompHome } from './pages/CompHome';
import { componentsMdxPaths } from './config/mdx-registry';
import { getCompNameFromPath, getCompRelativePath } from './utils/mdx-helper';

export function App(props = {}) {
  return (
    // <Provider theme={defaultTheme}>
    // <Provider theme={darkTheme}>
    <Provider theme={lightTheme}>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<SiteHome />} />
          <Route path='docs/*' element={<CompHome />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
