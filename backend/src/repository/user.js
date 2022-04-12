const dataPath = '../data/';
const usersPath = `${dataPath}dummy-data-users.json`;
const userData = require(`${dataPath}${usersPath}`)

const users = {
  getUserById(id) {
    return userData.find(user => user.id === id);
  },
  getUsers() {
    return userData;
  },
};

module.exports = users;