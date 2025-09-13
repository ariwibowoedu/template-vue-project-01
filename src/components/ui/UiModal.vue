<template>
  <div
    v-if="isOpen"
    @click.self="close"
    class="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm z-50"
  >
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 mx-4 transform transition-all"
      >
        <!-- Header -->
        <div v-if="title" class="mb-4 flex justify-between items-center">
          <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
          <button
            class="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
            @click="close"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <!-- Content -->
        <div class="mb-6">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  title: String,
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>
