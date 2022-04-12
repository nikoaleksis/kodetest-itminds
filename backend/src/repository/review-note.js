const dataPath = '../data/';
const notesPath = `${dataPath}dummy-data-reviewnotes.json`;
const notesData = require(`${dataPath}${notesPath}`)

const reviewNote = {
  getNotes(offset) {
    const limit = 3;
    return notesData.slice(offset - limit, offset);
  },
  getSections() {
    //First filter out the null sections,
    //then map the sectionRef
    const sections = notesData
      .filter((note) => note.sectionRef !== null)
      .map((note) => note.sectionRef);
    // Remove duplicates, convert back to array
    return [...new Set(sections).values()];
  },
};

module.exports = reviewNote;