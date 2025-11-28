<template>
  <div
    class="container flex items-center justify-between max-[800px]:justify-center gap-[30px] flex-wrap"
  >
    <Card
      v-for="book in displayedBooks"
      :id="book.id"
      :key="book.id"
      :book-cover="book.bookCover"
      :autor="book.autor"
      :name="book.name"
      :category-id="book.categoryId"
    />
  </div>
</template>

<script setup lang="ts">
import Card from "../components/Card.vue";
import { defineProps, computed } from "vue";
import { books } from "@/data";

const props = defineProps<{
  type: "new" | "popular";
  countToShow?: boolean;
}>();

const displayedBooks = computed(() => {
  let list = books;

  if (props.type === "new") list = list.filter((b) => b.isNew);
  else if (props.type === "popular") list = list.filter((b) => b.isPopular);

  return props.countToShow ? list.slice(0, 4) : list;
});
</script>
