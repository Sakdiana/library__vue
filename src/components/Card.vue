<template>
  <div class="flex items-center justify-start gap-[50px] flex-wrap">
    <div class="max-w-[212px] w-full">
      <img
        class="max-w-[212px] h-[222px] object-cover rounded"
        :src="bookCover"
        :alt="name"
      />
      <div>
        <p class="text-[#ADADAD] font-light text-base">
          {{ autor }}
        </p>
        <span class="text-sm text-gray-400">
          {{ getCategoryName(categoryId) }}
        </span>
        <h2 class="font-medium text-[21px]">
          {{ name }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  bookCover: string;
  autor: string;
  categoryId: number;
  name: string;
}>();
function getCategoryName(categoryId: number): string {
  const categories: Record<number, string> = {
    1: "Роман",
    2: "Фантастика",
    3: "Детектив",
  };
  return categories[categoryId] || "Без категории";
}
</script>
