<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card class="pa-4">
      <v-tabs v-model="tab" color="primary">
        <v-tab value="login">Войти</v-tab>
        <v-tab value="register">Зарегистрироваться</v-tab>
      </v-tabs>

      <v-window v-model="tab" class="mt-4">
        <v-window-item value="login">
          <v-text-field v-model="email" label="Email" variant="outlined" type="email" class="mb-2"></v-text-field>
          <v-text-field v-model="password" label="Пароль" variant="outlined" type="password"></v-text-field>
        </v-window-item>
        <v-window-item value="register">
          <div class="text-center pa-4 text-grey">Форма регистрации в разработке</div>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-end mt-4">
        <v-btn color="grey-darken-1" variant="text" @click="dialog = false">Отмена</v-btn>
        <v-btn color="primary" variant="flat" @click="signIn" :loading="loading">Войти</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, inject } from 'vue';

const dialog = ref(false);
const tab = ref('login');
const email = ref('');
const password = ref('');
const loading = ref(false);


const emit = defineEmits(['login-success']);

const loginService = inject('loginService');
const userService = inject('userService');

const open = () => { dialog.value = true; };
defineExpose({ open });

const signIn = () => {
  if (!email.value || !password.value) return alert('Не заполнены обязательные поля!');
  loading.value = true;
  
  loginService.authorizationUser(email.value, password.value)
    .then((response) => {
      if (response.recordId) {
        sessionStorage.setItem('recordId', response.recordId);
        return userService.getCurrentUser(response.recordId);
      }
    })
    .then((userData) => {
      if (userData) {
        console.log(userData); 
        sessionStorage.setItem('currentUser', JSON.stringify(userData));
        
        emit('login-success'); 
      }
      dialog.value = false;
    })
    .catch((error) => alert(error.message || 'Ошибка авторизации'))
    .finally(() => loading.value = false);
};
</script>