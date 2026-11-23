<template>
  <!-- v-model="dialog" управляет видимостью окна -->
  <v-dialog v-model="dialog" max-width="500px">
    <v-card class="pa-4">
      <!-- Вкладки Войти / Зарегистрироваться -->
      <v-tabs v-model="tab" color="primary">
        <v-tab value="login">Войти</v-tab>
        <v-tab value="register">Зарегистрироваться</v-tab>
      </v-tabs>

      <v-window v-model="tab" class="mt-4">
        <v-window-item value="login">
          <v-text-field
            v-model="email"
            label="Email"
            variant="outlined"
            type="email"
            class="mb-2"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Пароль"
            variant="outlined"
            type="password"
          ></v-text-field>
        </v-window-item>
        
        <v-window-item value="register">
          <div class="text-center pa-4 text-grey">Форма регистрации (в разработке)</div>
        </v-window-item>
      </v-window>

      <!-- Кнопки Отмена / Войти -->
      <v-card-actions class="justify-end mt-4">
        <v-btn color="grey-darken-1" variant="text" @click="dialog = false">Отмена</v-btn>
        <!-- Вызов метода signIn из Рисунка 25 -->
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

// Внедряем loginService (как на Рисунке 25)
const loginService = inject('loginService');

// Метод для открытия окна из Navbar
const open = () => {
  dialog.value = true;
};

// Разрешаем родительскому компоненту (Navbar) вызывать этот метод
defineExpose({ open });

// Логика при нажатии на кнопку "Войти"
const signIn = () => {
  if (!email.value || !password.value) {
    return alert('Не заполнены обязательные поля!');
  }

  loading.value = true;

  // Вызов нашего сервиса
  loginService.authorizationUser(email.value, password.value)
    .then((response) => {
      console.log('Авторизация', response);
      
      // Сохраняем ID записи в sessionStorage (это пригодится в будущем)
      if (response.recordId) {
        sessionStorage.setItem('recordId', response.recordId);
      }
      
      dialog.value = false; // Закрываем окно при успехе
    })
    .catch((error) => {
      console.error(error);
      alert(error.message || 'Ошибка при авторизации');
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>