<template>
  <header class="flex justify-center bg-gray-800 ">
    <nav class="mx-auto p-4 text-white">
      <ul class="w-[800px] flex space-x-4">
        <li><span class="font-bold">Planet Builder v0.0.3</span></li>
        <li><RouterLink to="/" class="bg-cyan-950 p-3 rounded-md hover:bg-cyan-800">All Planets</RouterLink></li>
        <li><RouterLink to="/add" class="bg-cyan-950 p-3 rounded-md hover:bg-cyan-800">Add Planet</RouterLink></li>
        <li v-if="isLoggedIn"><RouterLink to="/">My Planets</RouterLink></li>

        <li class="ml-auto"><RouterLink to="/" class="bg-cyan-950 p-3 rounded-md hover:bg-cyan-800">Sign-in</RouterLink></li>
        <li><RouterLink to="/" class="bg-cyan-950 p-3 rounded-md hover:bg-cyan-800">Sign-up</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {RouterLink, RouterView} from "vue-router";

export default {
  name: 'NavHeader',
  components: {RouterView, RouterLink},
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    }
  }
}
</script>