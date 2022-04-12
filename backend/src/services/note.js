const noteRepo = require('../repository/review-note');
const userService = require('../repository/user');

const noteService = {
  getNotes(offset) {
    const notes = noteRepo.getNotes(offset);
    // Map the user id from the note to instead include the complete user object
    const notesWithUsers = notes.map(note => {
      note.assigneeUsers = note.assignees.map(
        assignee => userService.getUserById(assignee.$oid));
      note.reporter = userService.getUserById(note.reporterId.$oid);
      return note;
      });
    return notesWithUsers;
  },
  getSections() {
    return noteRepo.getSections();
  }
};

module.exports = noteService;