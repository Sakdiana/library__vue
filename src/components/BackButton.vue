<template>
  <button
    @click="handleClick"
    class="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium mb-[50px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 19l-7-7 7-7"
      />
    </svg>
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

interface Props{
    to:string;
    label?:string;
}

const props=defineProps<Props>();
const router=useRouter()


function handleClick(){
    if(props.to){
        router.push(props.to)
    }else{
        router.back()
    }
}

</script>


