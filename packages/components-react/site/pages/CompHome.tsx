import * as React from 'react';
import { Suspense, lazy, useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

import { componentsMdxPaths } from '../config/mdx-registry';
import { getCompNameFromPath, getCompRelativePath } from '../utils/mdx-helper';

/**
 * 基于React.lazy和Suspense懒加载所有组件
 */
export function CompHome(props) {
  const [curName, setCurName] = useState('');

  const handleClick = (name) => {
    setCurName(name);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: 320,
            backgroundColor: 'beige',
          }}
          className='left-toc-placeholder'
        >
          {componentsMdxPaths.map((comp, index) => (
            <p key={comp.path}>
              <Link to={getCompRelativePath(comp.path).toLowerCase()}>
                {
                  // getCompNameFromPath(path)
                  comp.name
                }
              </Link>
            </p>
          ))}
        </div>
        <Suspense fallback={<div>Loading comp mdx docs...</div>}>
          <div
            style={{
              // backgroundColor: 'lightyellow',
              margin: '16px',
            }}
            className='right-main-placeholder'
          >
            <Routes>
              {componentsMdxPaths
                .filter((comp) => comp.status !== 'hidden')
                .map((comp) => {
                  let MaybeDynamicComp: any = PlaceholderH1;

                  console.log(';;lazy-before-str-0, ', comp.path);

                  const DynamicComp = lazy(() => {
                    console.log('lazy, ', getCompRelativePath(comp.path));
                    return import(
                      `../../src/${getCompRelativePath(comp.path)}`
                    );
                  });

                  MaybeDynamicComp = DynamicComp;

                  return (
                    <Route
                      key={comp.path}
                      path={getCompRelativePath(comp.path).toLowerCase()}
                      element={<MaybeDynamicComp />}
                    />
                  );
                })}
            </Routes>
          </div>
        </Suspense>
      </div>
    </div>
  );
}

function PlaceholderH1() {
  return <h1>占位符组件</h1>;
}
