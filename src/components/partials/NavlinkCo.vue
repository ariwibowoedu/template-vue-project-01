<template>
  <li v-for="route in routes" :key="route.name" class="list-none">
    <router-link :to="route.path" custom v-slot="{ navigate }">
      <button
        @click="handleClick(navigate)"
        class="group relative w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 flex items-center"
        :class="{
          'bg-primary/10 text-primary font-semibold': currentRoute.path === route.path,
          'text-gray-600 hover:bg-gray-100 hover:text-dark': currentRoute.path !== route.path,
        }"
      >
        <span class="relative">
          {{ route.name }}
          <!-- underline animasi -->
          <span
            class="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"
            :class="{ 'w-full': currentRoute.path === route.path }"
          ></span>
        </span>
      </button>
    </router-link>
  </li>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const emit = defineEmits(['close'])
const router = useRouter()
const currentRoute = useRoute()

const routes = computed(() => router.options.routes.filter((route) => route.name && route.path))

const handleClick = (navigate) => {
  emit('close')
  setTimeout(() => {
    navigate()
  }, 250)
}
</script>
