<template>
  <section class="bg-gray-100 min-h-screen py-10">
    <div class="container mx-auto px-4">

       <BackButton label="На главную" to="/" />

      
      <div
        v-if="book"
        class="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 p-6"
      >
        <img
          :src="book.bookCover"
          :alt="book.name"
          class="w-full md:w-1/3 h-auto rounded-xl object-cover shadow-md"
        />



        <div class="flex-1 flex flex-col gap-4">
          <h1 class="text-3xl font-bold text-gray-800">{{ book.name }}</h1>
          <p class="text-gray-500 text-lg font-medium">
            Автор: {{ book.autor }}
          </p>
          <p class="text-gray-700 leading-relaxed">{{ book.description }}</p>

          <div class="mt-4 flex flex-wrap gap-3 items-center">
            <span
              class="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {{ getCategoryName(book.categoryId) }}
            </span>
            <button
              class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition-colors duration-300"
            >
              В корзину
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
import BackButton from "./BackButton.vue";

const route = useRoute();
const bookId = Number(route.params.id);
const book = books.find((b) => b.id === bookId);

// Функция для отображения категории
function getCategoryName(categoryId: number) {
  const cat = category.find((c) => c.id === categoryId);
  return cat ? cat.name : "Без категории";
}

</script>
