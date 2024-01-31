<script setup>
import { planetStore } from '@/stores/planet.js'
import { ref } from 'vue'
import router from "@/router/index.js";

let planets = ref([])

const niceColors = ['#FFB6C1', '#FFD700', '#FFA07A', '#7B68EE', '#00FA9A', '#FF6347', '#40E0D0', '#BA55D3']

function getRandomPlanetProperties() {
  const color = niceColors[Math.floor(Math.random() * niceColors.length)]
  const size = Math.floor(Math.random() * (80 - 25 + 1)) + 25
  return { color, size }
}

planetStore()
    .getAll()
    .then((response) => {
      if (response.result === 'error') {
        return
      }
      planets.value = response.map(planet => ({
        ...planet,
        ...getRandomPlanetProperties()
      }))
    })


function goToPlanetPage(planetId) {
  router.push({ name: 'PlanetInfo', params: { id: planetId } });
}


</script>

<template>
  <main>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="planet in planets" :key="planet.id"
           class="flex items-center bg-cyan-50 p-5 rounded-lg w-96 cursor-pointer hover:bg-cyan-100"
           @click="goToPlanetPage(planet.id)">
        <div
            :style="{ backgroundColor: planet.color, width: planet.size + 'px', height: planet.size + 'px' }"
            class="rounded-full"
        ></div>
        <div class="ml-4">{{ planet.name }}</div>
      </div>
    </div>
  </main>
</template>
