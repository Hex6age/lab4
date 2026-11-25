<template>
  <v-app-bar color="primary" dark flat>
    <v-app-bar-nav-icon @click="toggleSidebar"></v-app-bar-nav-icon>
    <v-toolbar-title class="text-h6 font-weight-bold">Новости</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-text-field v-model="searchQuery" placeholder="Поиск" variant="outlined" density="compact" hide-details bg-color="white" class="mx-4" style="max-width: 300px" rounded></v-text-field>

    <div v-if="currentUser" class="d-flex align-center">
      <span class="mr-4">{{ currentUser.Surname }} {{ currentUser.Name }}</span>
      <v-btn variant="outlined" color="white" @click="logout">Выйти</v-btn>
    </div>
    
    <v-btn v-else variant="outlined" @click="openAuthDialog">Войти</v-btn>

    <AuthDialog ref="authDialogRef" @login-success="updateUser" />
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted } from 'vue'; // computed больше не нужен
import AuthDialog from './AuthDialog.vue';

const emit = defineEmits(['toggle-sidebar']);
const searchQuery = ref('');
const authDialogRef = ref(null);

const currentUser = ref(null);

const updateUser = () => {
  const userStr = sessionStorage.getItem('currentUser');
  currentUser.value = userStr ? JSON.parse(userStr) : null;
};

onMounted(() => {
  updateUser();
});

function toggleSidebar() { emit('toggle-sidebar'); }

function openAuthDialog() {
  if (authDialogRef.value) authDialogRef.value.open();
}

function logout() {
  sessionStorage.removeItem('recordId');
  sessionStorage.removeItem('currentUser');
  currentUser.value = null; // Мгновенно скрываем имя и показываем кнопку "Войти"
}
</script>