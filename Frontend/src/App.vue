<template>
  <v-app>
    <!-- Верхняя панель -->
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Система учета успеваемости учащихся</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-magnify" variant="text"></v-btn>
      <v-btn icon="mdi-account-circle" variant="text"></v-btn>
    </v-app-bar>

    <!-- Боковое меню -->
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item prepend-icon="mdi-view-dashboard" title="Главная" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group" title="Учащиеся" value="students"></v-list-item>
        <v-list-item prepend-icon="mdi-book-open-page-variant" title="Предметы" value="subjects"></v-list-item>
        <v-list-item prepend-icon="mdi-chart-line" title="Успеваемость" value="progress"></v-list-item>
        <v-list-item prepend-icon="mdi-cog" title="Настройки" value="settings"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Основной контент -->
    <v-main>
      <v-container fluid>
        <v-card class="mx-auto" max-width="800">
          <v-card-title class="text-h5">
            Добро пожаловать в систему!
          </v-card-title>
          <v-card-text>
            Здесь будет отображаться список учащихся, их оценки и другая информация.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="primary" variant="text">Обновить</v-btn>
            <v-btn color="secondary" variant="text">Настройки</v-btn>
          </v-card-actions>
        </v-card>

        <!-- Таблица (пример) -->
        <v-table class="mt-4">
          <thead>
            <tr>
              <th>ФИО учащегося</th>
              <th>Группа</th>
              <th>Средний балл</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in students" :key="student.id">
              <td>{{ student.name }}</td>
              <td>{{ student.group }}</td>
              <td>{{ student.grade }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    students: [
      { id: 1, name: 'Иванов Иван', group: 'ИВТ-31', grade: 4.8 },
      { id: 2, name: 'Петрова Анна', group: 'ИВТ-31', grade: 5.0 },
      { id: 3, name: 'Сидоров Алексей', group: 'ПИ-41', grade: 4.2 },
    ],
  }),
}
</script>

<style scoped>
/* можно добавить свои стили, если нужно */
</style>