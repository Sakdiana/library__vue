<script setup lang="ts">
import Cards from "@/components/Cards.vue";
import MainTitle from "@/components/MainTitle.vue";
import Section1 from "@/components/Section1.vue";
import Sections from "@/components/Sections.vue";
</script>

<template>
  <div class="">
    <Section1 />
    <div class="">
      <MainTitle title="Новинки " link="/newBooks" />

      <Cards type="new" countToShow />
    </div>

    <div class="">
      <MainTitle title="Популярное " link="/popularBooks" />

      <Cards type="popular" countToShow />
    </div>

    <Sections/>
  </div>
</template>
