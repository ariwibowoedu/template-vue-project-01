<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full transition-transform duration-300 backdrop-blur-xl text-dark z-30 shadow-lg py-6 px-4 lg:px-16',
      isHidden ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8">
      <logo-co />
      <ul class="hidden lg:flex lg:gap-x-12">
        <navlink-co />
      </ul>
      <button
        class="block lg:hidden"
        aria-label="close menu"
        type="button"
        @click="isMobileMenu = !isMobileMenu"
      >
        <feather-icon icon="menu" classes="w-6 h-6" />
      </button>
    </nav>
  </header>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="transition-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="isMobileMenu"
      class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-8 py-6 text-light sm:max-w-sm sm:ring-0 shadow-xl backdrop-blur-xl"
    >
      <div class="flex items-center justify-between">
        <logo-co />
        <button aria-label="Open Menu" type="button" @click="isMobileMenu = !isMobileMenu">
          <FeatherIcon icon="x" classes="h-6 w-6 text-dark" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <ul class="space-y-2">
          <navlink-co @close="isMobileMenu = false" />
        </ul>
      </div>
    </div>
  </transition>
</template>

<script setup>
import LogoCo from '@/components/partials/LogoCo.vue'
import FeatherIcon from '@/components/utils/FeatherIcon.vue'
import NavlinkCo from '@/components/partials/NavlinkCo.vue'

import { ref, onMounted, onUnmounted } from 'vue'

const isMobileMenu = ref(false)

const isHidden = ref(false)
let lastScroll = 0

const handleScroll = () => {
  const currentScroll = window.scrollY
  if (currentScroll > lastScroll && currentScroll > 50) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }

  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>