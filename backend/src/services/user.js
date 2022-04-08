const users = require('../repository/user');

const userService = {
  getUserById(id) {
    return users.getUserById(id);
  },
};

module.exports = userService;
