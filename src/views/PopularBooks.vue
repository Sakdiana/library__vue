<script setup lang="ts">
import BackButton from '@/components/BackButton.vue';
import Cards from '@/components/Cards.vue';

</script>

<template>
    <section class="mt-[100px] min-h-screen">
        <div class="container">
       <BackButton label="На главную" to="/" />

            <h2 class="text-white text-center mb-[80px] font-bold text-4xl">Популярное</h2>
            <div class="">

                <Cards type="popular"/>
            </div>
        </div>
    </section>
</template>