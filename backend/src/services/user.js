const users = require('../repository/user');

const userService = {
  getUserById(id) {
    return users.getUserById(id);
  },
  getUsers() {
    return users.getUsers();
  },
};

module.exports = userService;
