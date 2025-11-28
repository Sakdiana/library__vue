<template>
  <div class="relative w-[220px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
    <img :src="bookCover" alt="" class="w-full h-[300px] object-cover" />

    <div class="p-4 flex flex-col gap-2">
      <h2 class="font-semibold text-lg">{{ name }}</h2>
      <p class="text-gray-500 text-sm">{{ autor }}</p>
    </div>

    <!-- Сердечко -->
    <button
      @click="toggleFavorite"
      class="absolute top-3 right-3 focus:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        :stroke="isFavorite ? 'red' : 'currentColor'"
        :class="[
          'w-6 h-6 transition-colors duration-200',
          isFavorite ? 'fill-red-500' : 'text-gray-400'
        ]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.435 5.318a5.25 5.25 0 0 0-7.425 0L12 7.329l-2.01-2.01a5.25 5.25 0 1 0-7.425 7.425l2.01 2.01L12 21.435l7.425-7.425 2.01-2.01a5.25 5.25 0 0 0 0-7.425z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps<{
  id: number;
  name: string;
  autor: string;
  bookCover: string;
  categoryId: number;
}>();

const store = useStore();

// Проверяем, есть ли книга в избранном
const isFavorite = computed(() =>
  store.getters.getFavorites.some((b: any) => b.id === props.id)
);

// Функция для добавления/удаления из избранного
const toggleFavorite = () => {
  store.commit("toggleFavorite", {
    id: props.id,
    name: props.name,
    autor: props.autor,
    bookCover: props.bookCover,
    categoryId: props.categoryId,
  });
};
</script>
