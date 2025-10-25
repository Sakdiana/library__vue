<template>
  <section class="bg-gray-100 min-h-screen py-10">
    <div class="container mx-auto px-4">
      <button
        @click="goBack"
        class="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-[50px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Назад
      </button>

      <div
        v-if="book"
        class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6"
      >
        <!-- Изображение книги -->
        <img
          :src="book.bookCover"
          :alt="book.name"
          class="w-full md:w-1/3 h-auto rounded-xl object-cover shadow-md"
        />

        <!-- Информация о книге -->
        <div class="flex-1 flex flex-col gap-4">
          <h1 class="text-3xl font-bold text-gray-800">{{ book.name }}</h1>
          <p class="text-gray-500 text-lg font-medium">
            Автор: {{ book.autor }}
          </p>
          <p class="text-gray-700 leading-relaxed">{{ book.description }}</p>

          <!-- Дополнительно: категории и кнопки -->
          <div class="mt-4 flex flex-wrap gap-3 items-center">
            <span
              class="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {{ getCategoryName(book.categoryId) }}
            </span>
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300"
            >
              Купить
            </button>
          </div>
        </div>
      </div>

      <div v-else class="text-center text-gray-500 text-lg">
        Книга не найдена.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { books, category } from "@/data";
import router from "@/router";

const route = useRoute();
const bookId = Number(route.params.id);
const book = books.find((b) => b.id === bookId);

// Функция для отображения категории
function getCategoryName(categoryId: number) {
  const cat = category.find((c) => c.id === categoryId);
  return cat ? cat.name : "Без категории";
}


function goBack() {
  router.back();
}
</script>
