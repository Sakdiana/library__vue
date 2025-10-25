<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <div>
    <Header />

    <main>
      <router-view />
    </main>

     <Footer />
  </div>
</template>
