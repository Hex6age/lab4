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

    <!-- Кнопка профиля с выпадающим меню -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="text"
          class="text-none"
        >
          Чертков И.М.
          <v-icon end>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item prepend-icon="mdi-account-cog" title="Профиль" value="profile" @click="goToProfile"></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="Выйти" value="logout" @click="logout"></v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['toggle-sidebar']);
const searchQuery = ref('');

function toggleSidebar() {
  emit('toggle-sidebar');
}

function goToProfile() {
  console.log('Переход в профиль');
  // Здесь будет роут на профиль
}

function logout() {
  console.log('Выход из системы');
  // Здесь будет логика выхода
}
</script>