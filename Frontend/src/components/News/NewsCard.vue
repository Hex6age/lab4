<template>
  <v-card elevation="2" rounded="lg" height="100%">
    <!-- Серая заглушка вместо картинки -->
    <div class="image-placeholder-small"></div>
    
    <v-card-title class="text-h6">
      {{ news.title }}
    </v-card-title>
    
    <v-card-subtitle>
      {{ news.date }} | {{ news.category }}
    </v-card-subtitle>
    
    <v-card-text>
      <p>{{ news.description }}</p>
    </v-card-text>
    
    <v-card-actions>
      <v-btn color="primary" variant="text">
        Читать далее
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* Серая заглушка для маленькой картинки */
.image-placeholder-small {
  width: 100%;
  height: 180px;
  background-color: #bdbdbd;
}
</style>
