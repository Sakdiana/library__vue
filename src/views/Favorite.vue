<script setup lang="ts">
import { ref, onMounted } from "vue";
import BackButton from "@/components/BackButton.vue";
import Card from "@/components/Card.vue";

// Список избранных книг
const favorites = ref<any[]>([]);

onMounted(() => {
  try {
    const stored = localStorage.getItem("favorites");
    favorites.value = stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.warn("Ошибка при чтении favorites:", e);
    favorites.value = [];
  }
});
</script>

<template>
  <section class="min-h-screen bg-gray-50 py-10">
    <div class="container">
      <BackButton label="На главную" to="/" />

      <h1 class="text-3xl font-semibold mt-6 mb-8">Избранные книги</h1>

      <!-- Если нет избранных -->
      <div v-if="favorites.length === 0" class="text-gray-500 text-lg">
        Пока нет избранных книг 💔
      </div>

      <!-- Список избранных -->
      <div
        v-else
        class="flex flex-wrap justify-start gap-[32px]"
      >
        <Card
          v-for="book in favorites"
          :key="book.id"
          :id="book.id"
          :name="book.name"
          :autor="book.autor"
          :category-id="book.categoryId"
          :book-cover="book.bookCover"
        />
      </div>
    </div>
  </section>
</template>
