<template>
  <v-container class="d-flex">
    <v-text-field v-model="taskName" label="タスクを入力してください" />
    <v-btn @click="addTask" class="ml-2">追加</v-btn>
  </v-container>
</template>

<script setup lang="ts">
const taskStore = useTaskStore(); // ストアの利用
const taskName = ref<string>(''); // タスク名を保存するリアクティブな変数

const addTask = () => {
  if (taskName.value.trim() === '') return; // 空白を防止
  taskStore.addTask(taskName.value); // ストアにタスクを追加
  taskName.value = ''; // 入力欄をリセット
};
</script>

<style scoped>
.v-list {
  margin-top: 1rem;
}
.v-list-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
}
</style>