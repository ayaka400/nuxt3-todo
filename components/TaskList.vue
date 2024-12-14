<template>
  <v-container>
    <v-list dense>
      <v-list-item
          v-for="task in taskStore.tasks"
          :key="task.id"
          class="d-flex justify-space-between"
        >
          <div class="d-flex align-center">
            <p class="me-5">{{ task.name }}</p>
            <v-btn @click="removeTask(task.id)" color="error" small>削除</v-btn>
          </div>
        </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">

const taskStore = useTaskStore(); // ストアを利用

const removeTask = (id: number) => {
  taskStore.removeTask(id); // タスクを削除
};
</script>

<style scoped>
.v-list {
  margin-top: 1rem;
}
.v-list-item{
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
}
p {
  font-size: 18px;
}
</style>