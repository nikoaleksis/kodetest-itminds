import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../home/HomePage.vue';
import ReviewNote from '../note/ReviewNote.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/review-notes',
    name: 'Notes',
    component: ReviewNote,
  }],
});
