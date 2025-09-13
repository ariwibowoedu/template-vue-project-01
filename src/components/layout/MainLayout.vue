<template>
  <NavbarCo />
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-48 lg:mt-52">
    <slot />
  </main>
  <footer-co />
</template>

<script setup>
import NavbarCo from '@/components/partials/NavbarCo.vue'
import FooterCo from '@/components/partials/FooterCo.vue'
</script>