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

const mockApi = { getArticles };

export default mockApi;
