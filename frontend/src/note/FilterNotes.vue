<template>
  <div class="filter">
      <input type="text" placeholder="Quick search" />
      <div class="col">
        <label for="type">Type</label>
        <b-button-group id="type" size="small">
          <b-button>All</b-button>
          <b-button>Tasks</b-button>
          <b-button>Notes</b-button>
        </b-button-group>
      </div>
      <div class="col">
        <label for="type">Type</label>
        <b-button-group id="type" size="small">
          <b-button>All</b-button>
          <b-button>Low</b-button>
          <b-button>Medium</b-button>
          <b-button>High</b-button>
        </b-button-group>
      </div>
      <div class="col">
        <label for="reporter">Reporter</label>
        <MultiSelect
          id="reporter"
          v-model="value"
          mode="tags"
          :close-on-select="false"
          :options="['Reporter1','Reporter2','Reporter3']"
        />
      </div>
      <div class="col">
        <label for="assignee">Assignee</label>
        <MultiSelect
          id="assignee"
          v-model="value"
          mode="tags"
          :close-on-select="false"
          :options="['Assignee1', 'Assignee2', 'Assignee3',]"
        />
      </div>
      <div class="col">
        <label for="section">Section</label>
        <MultiSelect
          id="section"
          v-model="sectionRef"
          mode="tags"
          :close-on-select="false"
          :options="['Section1','Section2','Section3',]"
        />
      </div>
      <div class="col">
        <label for="date">Date</label>
        <Datepicker
      />
      </div>
    </div>
</template>

<script>
import MultiSelect from '@vueform/multiselect';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'newNote',
  components: { MultiSelect, Datepicker },
};

</script>

<style src="bootstrap/dist/css/bootstrap.css" scoped>
</style>

<style scoped>
.filter {
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 50px;
  display: flex;
}
.filter input {
  width: 150px;
  height: 36px;
  padding: 0;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  margin-top: 20px;
  margin-right: 10px;
}
.multiselect {
  margin: 0;
  min-width: 250px;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 10px;
}
.col[data-v-3d05a945] {
  flex: 0;
}
.dp__main {
  width: 200px;
}
</style>
