<template>
  <v-container>
    <v-row class="d-flex flex-column align-center">
      <v-col>
        <v-card class="my-4">
          <v-card-title>
            <h1 class="text-h3 text-center">ToDo</h1>
          </v-card-title>
          <v-card-text>
            <AddTask />
            <TaskList />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const taskStore = useTaskStore();
</script>

<style scoped>
.v-card {
  margin: auto;
  max-width: 500px;
}
</style>