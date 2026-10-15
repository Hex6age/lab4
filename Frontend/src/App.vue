<template>
  <v-app>
    <!-- Navbar -->
    <Navbar @toggle-sidebar="sidebarRef?.toggle()" />

    <!-- Sidebar (теперь слева) -->
    <Sidebar ref="sidebarRef" />

    <!-- Основной контент -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import Navbar from './components/UI/Navbar.vue';
import Sidebar from './components/UI/Sidebar.vue';

const sidebarRef = ref(null);
</script>