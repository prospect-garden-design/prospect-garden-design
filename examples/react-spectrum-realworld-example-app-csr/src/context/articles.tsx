import * as React from 'react';
import { useEffect, useReducer, useContext, createContext } from 'react';
import {
  articlesReducer,
  initialState,
  ArticleListAction,
  ArticleListState,
} from '../reducers/articleList';

type ArticleListContextProps = {
  state: ArticleListState;
  dispatch: React.Dispatch<ArticleListAction>;
};

const ArticlesContext = createContext<ArticleListContextProps>({
  state: initialState,
  dispatch: () => initialState,
});

export function ArticlesProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(articlesReducer, initialState);
  return <ArticlesContext.Provider value={{ state, dispatch }} {...props} />;
}

export default function useArticles() {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error(`useArticles must be used within an ArticlesProvider`);
  }
  return context;
}
