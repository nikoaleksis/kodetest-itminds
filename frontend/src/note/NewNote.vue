<template>
  <div class="new-note">
    <div class="inner">
      <h1>Here will be the form to create a new review note</h1>
      <button @click="toggleNewNote()">Close window</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['toggleNewNote'],
};
</script>

<style scoped>
.new-note {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}
.inner {
  border: 3px solid #333;
  background: #fff;
  padding: 32px;
}
.inner button {
  background-color: #0086ff;
  color: #fff;
  height: 30px;
  width: 100px;
  margin-left: 20px;
  border-color: #0086ff;
  border-radius: 2px;
}
</style>
