const express = require('express');
const router = express.Router();
const userService = require('../services/user.js');

router.get('/users/:id', (req, res) => {
  const id = req.params.id
  res.send(userService.getUserById(id));
});

router.get('/users', (req, res) => {
  res.send(userService.getUsers());
});

module.exports = router;