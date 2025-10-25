<script setup lang="ts">
import Cards from "@/components/Cards.vue";
import MainTitle from "@/components/MainTitle.vue";
import Section1 from "@/components/Section1.vue";
</script>

<template>
  <div class="">
    <Section1/>
    <MainTitle title="Новинки " link="/newBooks" />

    <Cards type="new" countToShow/>

  </div>
</template>
