<template>
  <v-container class="mt-5">
    <h1 class="text-h3 font-weight-bold mb-6">НОВОСТИ</h1>
    
    <!-- Главная новость -->
    <v-card v-if="mainNews" class="mb-6" elevation="3">
      <div style="width: 100%; height: 300px; background-color: #bdbdbd;"></div>
      <v-card-title class="text-h4">{{ mainNews.title }}</v-card-title>
      <v-card-subtitle>{{ mainNews.date }} | {{ mainNews.category }}</v-card-subtitle>
      <v-card-text>{{ mainNews.description }}</v-card-text>
    </v-card>

    <!-- Остальные новости -->
    <h2 class="text-h5 mb-4">Последние новости</h2>
    <v-row>
      <v-col
        v-for="news in otherNews"
        :key="news.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card elevation="2">
          <div style="width: 100%; height: 180px; background-color: #bdbdbd;"></div>
          <v-card-title>{{ news.title }}</v-card-title>
          <v-card-subtitle>{{ news.date }}</v-card-subtitle>
          <v-card-text>{{ news.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import newsData from '../../../NarfuNewsData.json';

const mainNews = ref(newsData[0] || null);
const otherNews = ref(newsData.slice(1) || []);
</script>