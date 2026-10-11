const express = require('express');
const routerUser = express.Router();
const user = require('../user.json');

// Return all details from user.json
routerUser.get('/profile', (req, res) => {
  res.json(user);
});

// Validate username and password
routerUser.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username) {
    return res.json({
      status: false,
      message: 'User Name is invalid'
    });
  }

  if (password !== user.password) {
    return res.json({
      status: false,
      message: 'Password is invalid'
    });
  }

  return res.json({
    status: true,
    message: 'User Is valid'
  });
});

// Logout route
routerUser.get('/logout/:username', (req, res) => {
  const username = req.params.username;

  res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;