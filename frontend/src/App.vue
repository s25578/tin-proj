<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavHeader from "@/components/Blocks/NavHeader.vue";
</script>

<template>


  <div>
    <NavHeader />

    <div class="flex justify-center h-screen">
      <div class="w-[800px] mx-auto p-4">
        <RouterView />
      </div>
    </div>
  </div>

</template>
