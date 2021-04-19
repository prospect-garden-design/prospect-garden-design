import { userList, articleList } from './mockData';

function mockGetListPromise(dataList) {
  return new Promise((resolve, reject) => {
    if (!dataList) {
      return setTimeout(() => reject(new Error('res data not found')), 250);
    }

    setTimeout(() => resolve({ data: dataList }), 250);
  });
}

export function getArticles(pCount = 10, pNum) {
  const startIdx = pNum ? pNum * pCount : 0;
  const endIdx = startIdx + pCount;
  const retData = {
    articles: articleList.slice(startIdx, endIdx),
    articlesCount: articleList.length,
  };

  return mockGetListPromise(retData);
}

export function getTags() {
  let articleTagList = new Set();
  articleList.forEach((article) => {
    articleTagList = new Set([...articleTagList, ...article.tagList]);
  });
  const retData = { tags: Array.from(articleTagList) };
  return mockGetListPromise(retData);
}

export function getArticle(slug) {
  const retArticle = articleList.find((article) => article.slug === slug);

  const retData = {
    article: retArticle,
  };

  return mockGetListPromise(retData);
}

export function getArticleComments(slug) {
  const retComments = [];

  const retData = {
    comments: retComments,
  };

  return mockGetListPromise(retData);
}

const mockApi = { getArticles, getTags, getArticle, getArticleComments };

export default mockApi;
