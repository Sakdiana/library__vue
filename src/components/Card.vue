  <template>
    <div class="flex items-center justify-start gap-[50px] flex-wrap">
      <div
        v-for="book in displayedBooks"
        :key="book.id"
        class="max-w-[212px] w-full"
      >
        <img
          class="max-w-[212px] h-[222px] object-cover rounded"
          :src="book.bookCover"
          :alt="book.name"
        />
        <div>
          <p class="text-[#ADADAD] font-light text-base">
            {{ book.autor }}
          </p>
          <span class="text-sm text-gray-400">
            {{ getCategoryName(book.categoryId) }}
          </span>
          <h2 class="font-medium text-[21px]">
            {{ book.name }}
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
  </script>