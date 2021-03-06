<template>
  <div class="content">
    <div class="page-title">
      <h1>Review Notes</h1>
      <button class="new-note-btn" @click="doAddNewNote = !doAddNewNote">
        New
      </button>
      <NewNote
        v-if="doAddNewNote"
        :toggle-new-note="() => (doAddNewNote = !doAddNewNote)"
      />
    </div>
    <FilterNotes />
    <div class="data">
      <table>
        <tbody>
          <tr v-for="(note, index) in notes" :key="index">
            <td>
              <input
                type="checkbox"
                v-model="note.isClosed"
                @:change="setIsClosed"
              />
            </td>
            <td>{{ note.title }}</td>
            <td class="neutral">{{ note.type }}</td>
            <td :class="calcStatusColor(note.status)">{{ note.status }}</td>
            <td :class="calcPriorityColor(note.priority.text)">
              {{ note.priority.text }}
            </td>
            <td :class="calcDueDateColor(note.dueDate)">
              <span v-if="isDueDate(note.dueDate)">Past due: </span>
              {{ formatDateStr(note.dueDate) }}
            </td>
            <td>
              <img
                class="profile-pic"
                v-bind:src="note.reporter.photo"
                alt="Avatar"
              />
            </td>
            <td v-if="note.assigneeUsers.length !== 0">
              <span
                v-for="(assignee, index) in note.assigneeUsers"
                :key="index"
              >
                <img
                  class="profile-pic"
                  v-bind:src="assignee.photo"
                  alt="Avatar"
                />
              </span>
            </td>
            <td v-else></td>
            <td :class="note.sectionRef !== null ? 'neutral' : ''">
              {{ formatSectionStr(note.sectionRef) }}
            </td>
            <td>{{ formatDateStr(note.createdAt.$date) }}</td>
            <td>{{ formatDateStr(note.updatedAt.$date) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="load-more" @click="loadMoreNotes()"><span>Load More</span></div>
  </div>
</template>

<script>
import notesApi from '../api/notes';
import usersApi from '../api/users';
import NewNote from './NewNote.vue';
import FilterNotes from './FilterNotes.vue';

export default {
  name: 'ReviewNotes',
  components: { NewNote, FilterNotes },
  created() {
    this.getNotes(this.offset);
    this.getUsers();
    this.getSections();
  },
  methods: {
    async getSections() {
      const sectionsData = await notesApi.getSections();
      this.sections = sectionsData;
    },
    async getNotes() {
      const notesData = await notesApi.getNotes(this.offset);
      this.notes = this.notes.concat(notesData);
    },
    async getUsers() {
      const usersData = await usersApi.getUsers();
      this.users = usersData.map((user) => user.name);
    },
    loadMoreNotes() {
      this.offset += 3;
      this.getNotes(this.offset);
    },
    calcPriorityColor(priority) {
      switch (priority) {
        case 'Low':
          return 'low';
        case 'Medium':
          return 'medium';
        case 'High':
          return 'high';
        default:
          return '';
      }
    },
    calcStatusColor(status) {
      switch (status) {
        case 'In Progress':
          return 'in-progress';
        case 'Not started':
          return 'neutral';
        case 'Pending documentation':
          return 'medium';
        case 'Addressed':
          return 'low';
        case 'Closed':
          return 'neutral';
        default:
          return '';
      }
    },
    calcDueDateColor(dateStr) {
      const date = new Date(dateStr);
      const now = new Date();
      if (date < now) {
        return 'date-due';
      }
      return '';
    },
    isDueDate(dateStr) {
      const date = new Date(dateStr);
      const now = new Date();
      if (date < now) {
        return true;
      }
      return false;
    },
    formatSectionStr(section) {
      if (section === null) {
        return '';
      }
      const newStr = section.replaceAll('-', ' ');
      return newStr.charAt(0).toUpperCase(0) + newStr.slice(1);
    },
    formatDateStr(dateStr) {
      if (dateStr === '') {
        return dateStr;
      }
      // Create a date object remove the zero hour offset if exists
      const dateObj = new Date(
        dateStr.slice(-1) === 'Z' ? dateStr.slice(0, -1) : dateStr,
      );
      const date = String(dateObj.getDate()).padStart(2, 0);
      const month = String(dateObj.getMonth()).padStart(2, 0);
      const year = dateObj.getFullYear();
      // If date string has no time, return only dd.mm.yyyy
      if (dateStr.split('T')[1] === undefined) {
        return `${date}.${month}.${year}`;
      }
      const hours = String(dateObj.getHours()).padStart(2, 0);
      const minutes = String(dateObj.getMinutes()).padStart(2, 0);
      return `${date}.${month}.${year} ${hours}:${minutes}`;
    },
    setIsClosed() {
      console.log('Test');
    },
  },
  data() {
    return {
      notes: [],
      users: [],
      sections: [],
      test: ['Test1', 'Test2', 'Test3'],
      offset: 3,
      doAddNewNote: false,
    };
  },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style scoped>
table {
  width: 100%;
  border-spacing: 2em;
}
td {
  border-radius: 5px;
  font-size: 12px;
}
.content {
  width: 100%;
}
.page-title {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
}
.new-note-btn {
  background-color: #0086ff;
  color: #fff;
  height: 25px;
  width: 75px;
  margin-left: 20px;
  border-color: #0086ff;
  border-radius: 2px;
}
.profile-pic {
  height: 30px;
  width: 30px;
  border-radius: 75%;
  border: 2px solid #0086ff;
}
.neutral {
  color: #fff;
  background-color: #5a7088;
}
.in-progress {
  background-color: #0086ff;
  color: #fff;
}
.low {
  color: #fff;
  background-color: #16a764;
}
.medium {
  color: #fff;
  background-color: #fe902f;
}
.high {
  color: #fff;
  background-color: #ff3461;
}
.date-due {
  color: #ff3562;
  background-color: #ffe2e7;
}
.load-more {
  background-color: #e6f2fe;
  height: 40px;
  width: 100%;
  display: table;
}
.load-more:hover {
  cursor: pointer;
}
.load-more span {
  color: #0287fd;
  display: table-cell;
  vertical-align: middle;
  text-decoration-line: underline;
}
</style>
