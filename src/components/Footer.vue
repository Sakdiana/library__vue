<template>
  <footer class="bg-gray-900 text-white py-8 mt-[80px]">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <!-- Логотип и название -->
      <div class="flex items-center gap-3">
        <img
          src="/images/png/logo.jpg"
          alt="logo"
          class="w-10 h-10 rounded-full object-cover"
        />
        <span class="font-semibold text-lg">BookStore</span>
      </div>

      <!-- Навигация -->
      <nav class="flex gap-6 text-sm">
        <RouterLink to="/" class="hover:underline">Главная</RouterLink>
        <RouterLink to="/newBooks" class="hover:underline">Новинки</RouterLink>
        <RouterLink to="/popularBooks" class="hover:underline">Популярное</RouterLink>
        <RouterLink to="/favorite" class="hover:underline">Избранное</RouterLink>
      </nav>

      <!-- Контакты / копирайт -->
      <div class="text-xs text-gray-400 text-center md:text-right">
        © 2025 BookStore. Все права защищены.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Ничего не нужно здесь, компонент чисто статический
</script>

<style scoped>
/* Можно добавить любые дополнительные стили, если нужно */
</style>
