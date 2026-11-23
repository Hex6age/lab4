<template>
  <v-app-bar color="primary" dark flat>
    <!-- Кнопка для сайдбара -->
    <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>

    <!-- Заголовок -->
    <v-toolbar-title class="text-h6 font-weight-bold">Новости</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Поле поиска -->
    <v-text-field
      v-model="searchQuery"
      placeholder="Поиск"
      variant="outlined"
      density="compact"
      hide-details
      bg-color="white"
      class="mx-4"
      style="max-width: 300px"
      rounded
    ></v-text-field>

    <!-- Кнопка Войти (на месте старого меню) -->
    <v-btn variant="outlined" @click="openAuthDialog">
      Войти
    </v-btn>

    <!-- Скрытый компонент диалога, который откроется по кнопке -->
    <AuthDialog ref="authDialogRef" />
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import AuthDialog from './AuthDialog.vue'; // Импортируем диалог

const emit = defineEmits(['toggle-sidebar']);
const searchQuery = ref('');

// Ссылка на компонент диалога
const authDialogRef = ref(null);

function toggleSidebar() {
  emit('toggle-sidebar');
}

// Функция открытия диалога
function openAuthDialog() {
  if (authDialogRef.value) {
    authDialogRef.value.open();
  }
}
</script>