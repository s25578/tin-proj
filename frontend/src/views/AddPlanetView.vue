<template>
  <div class="container mx-auto my-8 p-6 max-w-lg bg-white rounded-lg shadow-md">
    <h1 class="text-2xl font-bold mb-4">Add New Planet</h1>
    <form @submit.prevent="addPlanet">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
          Name
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" v-model="newPlanet.name" placeholder="Planet Name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="radius">
          Radius
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="radius" type="number" v-model="newPlanet.radius" placeholder="Radius">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
          Description
        </label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="newPlanet.description" placeholder="Description"></textarea>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="is_life">
          Life Exists
        </label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="is_life" v-model="newPlanet.is_life">
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Add Planet
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { planetStore } from '@/stores/planet.js'
import router from "@/router/index.js";

const newPlanet = ref({
  author_id: 1, // Temporary
  category_id: 1, // Temporary
  name: '',
  radius: 0,
  description: '',
  is_life: false
})

const store = planetStore()

function addPlanet() {
  store.create(newPlanet.value)
      .then(response => {
        router.push({ name: 'home'});
      })
      .catch(error => {
        console.log(error)
      })
}
</script>
