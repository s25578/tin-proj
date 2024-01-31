
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { planetStore } from '@/stores/planet.js'

const router = useRouter()
const route = useRoute()
const planet = ref({})

onMounted(async () => {
  const planetId = route.params.id
  const response = await planetStore().getOne(planetId)
  if (response.result !== 'error') {
    planet.value = response
  }
})

</script>

<template>
  <div class="container mx-auto my-8 p-6 max-w-4xl bg-white rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-4 text-center">{{ planet.name }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-gray-100 p-4 rounded">
        <div class="font-semibold">Global ID</div>
        <div>{{ planet.id }}</div>
      </div>
      <div class="bg-gray-100 p-4 rounded">
        <div class="font-semibold">Radius</div>
        <div>{{ planet.radius }} lm</div>
      </div>
      <div class="bg-gray-100 p-4 rounded">
        <div class="font-semibold">Life Exists</div>
        <div>{{ planet.is_life ? "Yes" : "No" }}</div>
      </div>
      <div class="bg-gray-100 p-4 rounded">
        <div class="font-semibold">Description</div>
        <div>{{ planet.description }}</div>
      </div>
    </div>
  </div>
</template>

