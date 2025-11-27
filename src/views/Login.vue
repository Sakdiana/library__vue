<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import BackButton from "@/components/BackButton.vue";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = () => {
  if (!email.value || !password.value) {
    error.value = "Пожалуйста, заполните все поля";
    return;
  }

  // Пример простой авторизации
  if (email.value === "test@mail.com" && password.value === "123456") {
    localStorage.setItem("user", JSON.stringify({ email: email.value }));
    router.push("/");
  } else {
    error.value = "Неверный логин или пароль";
  }
};
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="container max-w-md bg-white shadow-xl rounded-2xl p-8">
      <BackButton label="На главную" to="/" />

      <h1 class="text-3xl font-semibold text-center mb-6">Вход в аккаунт</h1>

      <form
        @submit.prevent="handleLogin"
        class="flex flex-col gap-5"
      >
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Введите email"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black transition"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Пароль</label>
          <input
            v-model="password"
            type="password"
            placeholder="Введите пароль"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black transition"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Войти
        </button>

        <p
          v-if="error"
          class="text-red-500 text-center text-sm mt-2"
        >
          {{ error }}
        </p>
      </form>

      <p class="text-center text-sm mt-6 text-gray-600">
        Нет аккаунта?
        <RouterLink to="/register" class="text-black font-semibold hover:underline"
          >Зарегистрироваться</RouterLink
        >
      </p>
    </div>
  </section>
</template>
