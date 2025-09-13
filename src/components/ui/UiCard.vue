<template>
  <div
    :class="[
      'rounded-2xl border bg-white/80 backdrop-blur-sm p-6 shadow-sm transition-all duration-300',
      hoverable ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  hoverable: { type: Boolean, default: false },
})
</script>
