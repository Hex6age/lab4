<template>
  <v-navigation-drawer
    v-model="isOpen"
    location="left"
    temporary
    width="300"
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-home"
        title="Последние новости"
        value="latest"
        @click="goToLatest"
      ></v-list-item>

      <v-list-item
        prepend-icon="mdi-fire"
        title="Самые просматриваемые"
        value="popular"
        @click="goToPopular"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch } from 'vue';

const savedState = localStorage.getItem('sidebarOpen');
const isOpen = ref(savedState ? JSON.parse(savedState) : false);

watch(isOpen, (newValue) => {
  localStorage.setItem('sidebarOpen', JSON.stringify(newValue));
});

function toggle() {
  isOpen.value = !isOpen.value;
}

function goToLatest() {
  console.log('Переход к последним новостям');
}

function goToPopular() {
  console.log('Переход к популярным новостям');
}

defineExpose({ toggle, isOpen });
</script>