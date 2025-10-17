<template>
  <div class="flex items-center justify-start gap-[50px] flex-wrap">
    <Card
      v-for="book in displayedBooks"
      :key="book.id"
      :bookCover="book.bookCover"
      :autor="book.autor"
      :name="book.name"
      :categoryId="book.categoryId"
    />
  </div>
</template>



<script setup lang="ts">
import Card from '../components/Card.vue'
import { defineProps, computed } from "vue";

const props = defineProps<{
  type: "new" | "popular";
  countToShow:boolean
}>();
</script>