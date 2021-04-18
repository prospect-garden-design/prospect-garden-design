import faker from 'faker';
const userNum = 8;
const articleNum = 800;

export let userList = new Array(userNum).fill(0).map((item, index) => ({
  user: {
    id: index,
    username: `testuser${index}`,
    email: `testuser${index}@gmail.com`,
    token: `jwt-token-${index}`,
    bio: faker.name.jobTitle(),
    image: null,
  },
}));

export let articleList = new Array(articleNum).fill(0).map((item, index) => ({
  // slug: `article-id-${index}`,
  slug: faker.lorem.slug(),
  title: `${index}-${faker.lorem.words()}`,
  description: faker.lorem.sentences(),
  body: faker.lorem.paragraphs(),
  tagList: [faker.name.jobType(), faker.name.jobArea()],
  createdAt: faker.date.past(),
  updatedAt: faker.date.recent(),
  favorited: false,
  favoritesCount: 0,
  author: {
    username: `testuser${randomIntBetween(0, userNum - 1)}`,
    bio: 'work at statefarm',
    image: 'https://i.stack.imgur.com/xHWG8.jpg',
    following: false,
  },
}));

function randomIntBetween(min = 1, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
