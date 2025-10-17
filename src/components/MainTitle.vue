<template>
  <section>
    <div class="container">
      <div class="flex items-center justify-between">
        <h2 class="font-medium text-[32px] text-white">{{ title }}</h2>
        <button
          class="font-bold text-xs bg-[#EC8F32] text-white rounded-full px-[20px] py-[10px]  hover:text-black"
        >
          Смотреть все
        </button>
      </div>
    </div>
  </section>
</template>

<style>
button{
    transition: all 0.4s linear 0.4s;
}

</style>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  title: string;
}>();
</script>
