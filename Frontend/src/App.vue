<template>
  <v-app>
    <Navbar @toggle-sidebar="sidebarRef?.toggle()" />

    <Sidebar ref="sidebarRef" />

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