import faker from 'faker';
import { userList, articleList } from './mockData';

function mockResPromise(dataOrList: unknown, timeout = 250) {
  return new Promise((resolve, reject) => {
    if (!dataOrList) {
      return setTimeout(() => reject(new Error('res data not found')), timeout);
    }

    setTimeout(() => resolve({ data: dataOrList }), timeout);
  });
}

export function getArticles(pCount = 10, pNum) {
  const startIdx = pNum ? pNum * pCount : 0;
  const endIdx = startIdx + pCount;
  const retData = {
    articles: articleList.slice(startIdx, endIdx),
    articlesCount: articleList.length,
  };

  return mockResPromise(retData);
}

export function getTags() {
  let articleTagList = new Set();
  articleList.forEach((article) => {
    articleTagList = new Set([...articleTagList, ...article.tagList]);
  });
  const retData = { tags: Array.from(articleTagList) };
  return mockResPromise(retData);
}

export function getArticle(slug) {
  const retArticle = articleList.find((article) => article.slug === slug);

  const retData = {
    article: retArticle,
  };

  return mockResPromise(retData);
}

export function getArticleComments(slug) {
  const retComments = [];

  const retData = {
    comments: retComments,
  };

  return mockResPromise(retData);
}

export function registerUser({ user }) {
  const retUser = {
    ...user,
    id: userList.length,
    // token: faker.datatype.uuid(),
    token: `--test--${faker.datatype.uuid()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    bio: null,
    image: null,
  };

  userList.push(retUser);

  // console.log(`==, mock register ${user} success`);

  const retData = {
    user: retUser,
  };

  return mockResPromise(retData);
}
export function getUserProfile(username: string) {
  const matchedUser = userList.find((curUser) => curUser.username === username);

  const retData = {
    profile: {
      username,
      bio: matchedUser?.bio ?? '',
      image: matchedUser?.image ?? '',
      following: false,
    },
  };

  return mockResPromise(retData);
}

export function updateUser({ user }) {
  let matchedUser = userList.find((curUser) => curUser.email === user.email);
  const updatedUser = { ...matchedUser, ...user };
  matchedUser = updatedUser;

  const retData = {
    user: updatedUser,
  };

  return mockResPromise(retData);
}

export function loginByEmail({ user }) {
  const matchedUser = userList.find((curUser) => curUser.email === user.email);

  const retData = {
    user: matchedUser,
  };

  return mockResPromise(retData);
}

const mockApi = {
  getArticles,
  getTags,
  getArticle,
  getArticleComments,
  registerUser,
  loginByEmail,
  updateUser,
  getUserProfile,
};

export default mockApi;
