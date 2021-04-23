import faker from 'faker';
import { userList, articleList, getUserByUsername } from './mockData';

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

export function getArticle(slug) {
  const retArticle = articleList.find((article) => article.slug === slug);

  console.log(
    '==get-1article-articleList, ',
    articleList[articleList.length - 1],
  );
  console.log('==get-1article, ', retArticle);
  const retData = {
    article: retArticle,
  };

  return mockResPromise(retData);
}

export function createArticle({ article }) {
  const retArticle = {
    ...article,
    slug: faker.lorem.slug(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    favorited: false,
    favoritesCount: 0,
    author: {
      ...getUserByUsername(article.user.username),
      following: false,
    },
  };

  delete retArticle['user'];

  articleList.push(retArticle);

  // console.log(`==, mock create ${article} success`);

  const retData = {
    article: retArticle,
  };

  return mockResPromise(retData);
}

export function updateArticle({ article }) {
  console.log('==update-1article, ', article);
  let matched = articleList.find(
    (curArticle) => curArticle.slug === article.slug,
  );

  console.log('==matched, ', matched);
  const updatedArticle = { ...matched, ...article };
  console.log('==updated, ', updatedArticle);
  matched = updatedArticle;

  console.log('==update-articleList, ', articleList[articleList.length - 1]);

  const retData = {
    article: updatedArticle,
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

export function getArticleComments(slug) {
  const retComments = [];

  const retData = {
    comments: retComments,
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

export function createUser({ user }) {
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

  // console.log(`==, mock create ${user} success`);

  const retData = {
    user: retUser,
  };

  return mockResPromise(retData);
}

export function updateUser({ user }) {
  let matched = userList.find((curUser) => curUser.email === user.email);
  console.log('==matched-user, ', matched);
  const updatedUser = { ...matched, ...user };
  console.log('==updated-user, ', updatedUser);
  matched = updatedUser;

  // console.log('==update-userList, ', userList[userList.length - 1]);
  console.log('==update-userList, ', JSON.stringify(userList));

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
  getArticle,
  createArticle,
  updateArticle,
  getTags,
  getArticleComments,
  createUser,
  updateUser,
  loginByEmail,
  getUserProfile,
};

export default mockApi;
