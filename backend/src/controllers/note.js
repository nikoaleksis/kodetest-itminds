const express = require('express');
const router = express.Router();
const noteService = require('../services/note.js');

router.get('/review-notes', (req, res) => {
  const offset = req.query.offset;
  res.send(noteService.getNotes(offset));
});

router.get('/review-notes/sections', (req, res) => {
  res.send(noteService.getSections());
});

module.exports = router;