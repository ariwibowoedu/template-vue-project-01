<template>
  <div
    v-if="isOpen"
    @click.self="close"
    class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-65 z-50"
  >
    <div class="bg-white rounded-2xl shaodw-lg max-w-lg w-full p-6 mx-4">
      <!-- header -->
      <div v-if="title" class="mb-4">
        <h2 class="text-xl font-semibold">{{ title }}</h2>
      </div>
      <!-- content -->
      <div class="mb-6">
        <slot />
      </div>
    </div>
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

<style>
</style>