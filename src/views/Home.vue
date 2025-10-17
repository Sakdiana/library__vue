<script setup lang="ts">
import Cards from "@/components/Cards.vue";
import MainTitle from "@/components/MainTitle.vue";
</script>

<template>
  <div class="">
    <MainTitle title="Новинки " />

    <Cards type="new" countToShow/>

  </div>
</template>
