<template>
  <div class="flex flex-wrap justify-start gap-[32px]">
    <div
      class="w-[220px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col relative"
    >
      <!-- Избранное -->
      <button
        class="absolute top-3 right-3"
        @click="toggleFavorite"
        aria-label="Добавить в избранное"
      >
        <div
          class="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer inline-flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            :fill="isFavorite ? 'currentColor' : 'none'"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 transition-colors duration-300"
            :class="isFavorite ? 'text-red-500' : 'text-gray-500'"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.435 5.318a5.25 5.25 0 0 0-7.425 0L12 7.329l-2.01-2.01a5.25 5.25 0 1 0-7.425 7.425l2.01 2.01L12 21.435l7.425-7.425 2.01-2.01a5.25 5.25 0 0 0 0-7.425z"
            />
          </svg>
        </div>
      </button>

      <!-- Обложка -->
      <img class="w-full h-[260px] object-cover" :src="bookCover" :alt="name" />

      <!-- Информация о книге -->
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

      <!-- Кнопки -->
      <div class="p-4 flex flex-col items-center w-full gap-[20px]">
        <button
          @click="goToBook"
          class="font-bold w-full text-xs bg-[#EC8F32] text-white rounded-full px-[20px] py-[10px] hover:text-black transition-all duration-300"
        >
          подробнее
        </button>

        <button
          @click="toggleCart"
          class="font-bold w-full text-xs border border-[#EC8F32] hover:text-black rounded-full px-[20px] py-[10px] text-[#EC8F32] transition-all duration-300"
        >
          {{ inCart ? 'В корзине' : 'в корзину' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

// props книги
const props = defineProps<{
  id: number;
  bookCover: string;
  autor: string;
  categoryId: number;
  name: string;
}>();

// Проверка: есть ли в избранном
const isFavorite = computed(() =>
  store.getters.getFavorites.some((b: any) => b.id === props.id)
);

// Добавление/удаление из избранного
const toggleFavorite = () => {
  store.commit("toggleFavorite", {
    id: props.id,
    name: props.name,
    autor: props.autor,
    bookCover: props.bookCover,
    categoryId: props.categoryId,
  });
};

// Проверка: есть ли в корзине
const inCart = computed(() =>
  store.getters.getCart.some((b: any) => b.id === props.id)
);

// Добавление/удаление из корзины
const toggleCart = () => {
  if (inCart.value) {
    const cart = store.getters.getCart.filter((b: any) => b.id !== props.id);
    store.commit("setCart", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    store.commit("addToCart", {
      id: props.id,
      name: props.name,
      autor: props.autor,
      bookCover: props.bookCover,
      categoryId: props.categoryId,
    });
  }
};

// Переход на страницу книги
const goToBook = () => {
  router.push(`/book/${props.id}`);
};

// Категории
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
