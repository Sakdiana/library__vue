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
import Card from "../components/Card.vue";
import { defineProps, computed } from "vue";
import { books } from "@/data";

const props = defineProps<{
  type: "new" | "popular";
  countToShow: boolean;
}>();

const displayedBooks = computed(() => {
  let list = books;
  if (props.type == "new") {
    list = list.filter((b) => b.isNew);
  } else if (props.type === "popular") {
    list = list.filter((b) => b.isPopular);
  }

  return props.countToShow ? list.slice(0, 6) : list;
});
</script>
