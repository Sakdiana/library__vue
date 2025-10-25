<template>
  <section>
    <div class="container">
      <div class="flex items-center justify-between mb-[100px] max-[530px]:flex-col max-[530px]:gap-[10px]">
        <h2 class="font-medium text-[32px] text-white">{{ title }}</h2>
        <RouterLink
          v-if="link"
          :to="link"
          class="font-bold text-xs bg-[#EC8F32] text-white rounded-full px-[20px] py-[10px] hover:text-black transition-all duration-300"
        >
          Смотреть все
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style>
button {
  transition: all 0.4s linear 0.4s;
}
</style>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
  link?: string;
}>();
</script>
