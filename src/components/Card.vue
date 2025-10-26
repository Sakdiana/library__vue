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
import { defineProps, ref, onMounted } from "vue";
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

function safeReadFavorites() {
  try {
    const raw = localStorage.getItem("favorites");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.warn("Не удалось прочитать favorites из localStorage:", e);
    return [];
  }
}

function safeWriteFavorites(favorites: any[]) {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (e) {
    console.warn("Не удалось записать favorites в localStorage:", e);
  }
}

onMounted(() => {
  const favorites = safeReadFavorites();
  isFavorite.value = favorites.some((b: any) => b.id == props.id);
});

function toggleFavorite() {
  const favorites = safeReadFavorites();
  const index = favorites.findIndex((b: any) => b.id == props.id);

  if (index === -1) {
    // добавить
    favorites.push({
      id: props.id,
      name: props.name,
      autor: props.autor,
      categoryId: props.categoryId,
      bookCover: props.bookCover,
    });
    safeWriteFavorites(favorites);
    isFavorite.value = true;
    alert("Добавлено в избранное ❤️");
  } else {
    // удалить
    favorites.splice(index, 1);
    safeWriteFavorites(favorites);
    isFavorite.value = false;
    alert("Удалено из избранного 💔");
  }
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
