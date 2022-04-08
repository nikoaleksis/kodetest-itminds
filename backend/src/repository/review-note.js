const dataPath = '../data/';
const notesPath = `${dataPath}dummy-data-reviewnotes.json`;
const notesData = require(`${dataPath}${notesPath}`)

const reviewNote = {
  getNotes(offset) {
    const limit = 3;
    return notesData.slice(offset - limit, offset);
  },
};

module.exports = reviewNote;