<template>
  <li v-for="route in routes" :key="route.path" class="list-none">
    <router-link
      :to="route.path"
      @click="closeMenu"
      class="-mx-3 flex gap-2 px-3 py-2 text-xl font-medium leading-7 text-dark border-b-2 border-transparent hover:border-b hover:border-primary hover:text-primary transition-all duration-200"
      :class="{
        'border-primary text-dark': $route.path === route.path,
      }"
    >
      {{ route.name }}
    </router-link>
  </li>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])
const router = useRouter()

const routes = computed(() => router.options.routes.filter((route) => route.name))

const closeMenu = () => {
  emit('close')
}
</script>

<style>
</style>