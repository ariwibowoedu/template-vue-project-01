<template>
  <div
    :class="[
      'rounded-xl shadow-md p-6 bg-white transition hover:shadow-xl',
      hoverable ? 'cursor-pointer' : '',
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
