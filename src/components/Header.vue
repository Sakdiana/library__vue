<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const hasFavorites = ref(false);
const route = useRoute();

const checkFavorites = () => {
  try {
    const stored = localStorage.getItem("favorites");
    const favorites = stored ? JSON.parse(stored) : [];
    hasFavorites.value = favorites.length > 0;
  } catch (e) {
    console.warn("Ошибка при чтении избранных:", e);
    hasFavorites.value = false;
  }
};

onMounted(() => {
  checkFavorites();

  window.addEventListener("favorites-changed", checkFavorites);

  window.addEventListener("storage", checkFavorites);
});

const isOpen=ref(false)
</script>

<template>
  <header class="bg-[#000000EB] py-4">
    <div class="container">
      <div class="flex items-center justify-between">
        <RouterLink :to="'/'" class="flex items-center gap-3">
          <img
            class="w-[60px] h-[60px] rounded-full object-cover"
            src="/images/png/logo.jpg"
            alt="logo"
          />
          <span class="text-white text-xl font-semibold">BookStore</span>
        </RouterLink>

        <div
          class="flex items-center gap-3 max-w-[300px] w-full text-white border border-white rounded-full py-[6px] px-[15px] max-[970px]:hidden"
        >
          <input
            class="w-full bg-transparent outline-none placeholder-gray-300 text-sm"
            type="search"
            placeholder="Поиск..."
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 22L15 15M17.3333 9.16667C17.3333 13.677 13.677 17.3333 9.16667 17.3333C4.65634 17.3333 1 13.677 1 9.16667C1 4.65634 4.65634 1 9.16667 1C13.677 1 17.3333 4.65634 17.3333 9.16667Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <nav class="max-[970px]:hidden">
          <ul class="flex items-center gap-6">
            <RouterLink
              :to="'/'"
              class="text-white text-base font-medium hover:text-gray-300 cursor-pointer"
            >
              Главное
            </RouterLink>

            <RouterLink
              :to="'/newBooks'"
              class="text-white text-base font-medium hover:text-gray-300 cursor-pointer"
            >
              Новинки
            </RouterLink>

            <RouterLink
              :to="'/popularBooks'"
              class="text-white text-base font-medium hover:text-gray-300 cursor-pointer"
            >
              Популярное
            </RouterLink>
          </ul>
        </nav>

        <div class="flex items-center gap-4 text-white max-[970px]:hidden">
          <RouterLink :to="'/cart'" class="relative">
            <img src="/images/svg/cart.png" alt="" />
          </RouterLink>

          <RouterLink
            :to="'/login'"
            class="text-sm font-medium hover:underline"
          >
            Вход
          </RouterLink>

          <RouterLink :to="'/favorite'" class="w-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              :stroke="hasFavorites ? 'red' : 'white'"
              :class="[
                'w-6 h-6 transition-colors duration-300',
                hasFavorites ? 'text-red-500 fill-red-500' : 'text-white',
              ]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.435 5.318a5.25 5.25 0 0 0-7.425 0L12 7.329l-2.01-2.01a5.25 5.25 0 1 0-7.425 7.425l2.01 2.01L12 21.435l7.425-7.425 2.01-2.01a5.25 5.25 0 0 0 0-7.425z"
              />
            </svg>
          </RouterLink>
        </div>

        <div
        @click=""
        class="menu hidden max-[970px]:block">
          <svg
            class="w-6 h-6 transition-transform duration-200 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6h18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M3 12h18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M3 18h18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>
