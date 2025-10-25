<template>
  <div class="flex flex-wrap justify-start gap-[32px]">
    <div
      class="w-[220px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col relative"
    >
      <button
        class="absolute top-3 right-3"
        @click="toggleFavorite"
        aria-label="Добавить в избранное"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 transition-colors duration-300"
          :class="isFavorite ? 'text-red-500 fill-red-500' : 'text-gray-400'"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.435 5.318a5.25 5.25 0 0 0-7.425 0L12 7.329l-2.01-2.01a5.25 5.25 0 1 0-7.425 7.425l2.01 2.01L12 21.435l7.425-7.425 2.01-2.01a5.25 5.25 0 0 0 0-7.425z"
          />
        </svg>
      </button>

      <img class="w-full h-[260px] object-cover" :src="bookCover" :alt="name" />
      <div class="p-4 flex flex-col justify-between flex-1">
        <div>
          <p class="text-gray-400 text-sm font-light truncate">{{ autor }}</p>
          <span
            class="inline-block text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mt-1 mb-2"
          >
            {{ getCategoryName(categoryId) }}
          </span>
          <h2
            class="text-lg font-medium text-gray-800 leading-tight line-clamp-2"
          >
            {{ name }}
          </h2>
        </div>
      </div>

      <div class="p-4">
        <button
          @click="goToBook"
          class="font-bold text-xs bg-[#EC8F32] text-white rounded-full px-[20px] py-[10px] hover:text-black transition-all duration-300"
        >
          подробнее
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps<{
  id: number;
  bookCover: string;
  autor: string;
  categoryId: number;
  name: string;
}>();

const isFavorite = ref(false);

function toggleFavorite() {
  isFavorite.value = !isFavorite.value;
}

function goToBook() {
  router.push(`/book/${props.id}`);
}

function getCategoryName(categoryId: number): string {
  const categories: Record<number, string> = {
    1: "Роман",
    2: "Фантастика",
    3: "Детектив",
  };
  return categories[categoryId] || "Без категории";
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
