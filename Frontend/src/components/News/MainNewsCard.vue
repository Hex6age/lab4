<template>
  <v-card class="mb-6" elevation="3" rounded="lg">
    <!-- Серая заглушка вместо картинки (по заданию) -->
    <div class="image-placeholder-large"></div>
    
    <v-card-title class="text-h4 font-weight-bold mt-4 px-6">
      {{ news.title }}
    </v-card-title>
    
    <v-card-subtitle class="px-6">
      <v-icon size="small" class="mr-1">mdi-calendar</v-icon> {{ news.date }}
      <v-chip class="ml-4" size="small" color="primary">{{ news.category }}</v-chip>
    </v-card-subtitle>
    
    <v-card-text class="px-6 text-body-1">
      <p class="font-weight-medium">{{ news.description }}</p>
      <p>{{ news.text }}</p>
    </v-card-text>
  </v-card>
</template>

<script setup>
// Принимаем объект новости как пропс
defineProps({
  news: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* Серая заглушка для большой картинки */
.image-placeholder-large {
  width: 100%;
  height: 350px;
  background-color: #bdbdbd; 
  border-radius: 8px 8px 0 0;
}
</style>
