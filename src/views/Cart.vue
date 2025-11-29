<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import BackButton from "@/components/BackButton.vue";

const store = useStore();

const cart = computed(() => store.getters.getCart);

const removeFromCart = (id: number) => {
  const newCart = cart.value.filter((b: any) => b.id !== id);
  store.commit("setCart", newCart);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

const totalPrice = computed(() =>
  cart.value.reduce((sum: number, b: any) => {
    return sum + (b.price || 0) * (b.quantity || 1);
  }, 0)
);
</script>

<template>
  <section class="min-h-screen bg-gray-50 py-10">
    <div class="container">
      <BackButton label="На главную" to="/" />

      <h1 class="text-3xl font-semibold mt-6 mb-8">Корзина</h1>

      <div v-if="cart.length === 0" class="text-gray-500 text-lg">
        Корзина пуста 🛒
      </div>

      <div v-else class="space-y-6">
        <div
          v-for="book in cart"
          :key="book.id"
          class="flex bg-white shadow-md rounded-xl p-4 items-center gap-4"
        >
          <img
            :src="book.bookCover"
            alt=""
            class="w-20 h-28 object-cover rounded-lg"
          />

          <div class="flex-1">
            <h2 class="text-lg font-medium">{{ book.name }}</h2>
            <p class="text-gray-500 text-sm">{{ book.autor }}</p>
            <p class="text-gray-400 text-xs mt-1">
              Количество: <b>{{ book.quantity || 1 }}</b>
            </p>
          </div>

          <button
            @click="removeFromCart(book.id)"
            class="text-red-500 font-medium hover:underline"
          >
            Удалить
          </button>
        </div>

        <div class="bg-white p-4 rounded-xl shadow-md mt-6">
          <p class="text-lg font-semibold">
            Итоговая сумма: {{ totalPrice }} сом
          </p>
          <button
            class="mt-4 w-full bg-[#EC8F32] text-white py-3 rounded-full font-bold hover:text-black transition"
          >
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
