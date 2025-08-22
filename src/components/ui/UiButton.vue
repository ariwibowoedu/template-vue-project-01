<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    :to="to"
    :type="to ? null : type"
    :class="[
      'inline-block rounded-lg font-medium transition duration-300',
      variantClasses,
      sizeClasses,
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'primary' }, // primary | secondary | outline
  size: { type: String, default: 'xl' }, // sm | md | lg
  type: { type: String, default: 'button' }, // hanya dipakai kalau <button>
  to: { type: [String, Object], default: null }, // untuk router-link
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-secondary text-light hover:bg-opacity-90'
    case 'outline':
      return 'border border-gray-500 text-gray-700 hover:bg-gray-100'
    case 'primary':
    default:
      return 'bg-primary text-light hover:bg-opacity-90'
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm px-3 py-1.5'
    case 'lg':
      return 'text-lg px-8 py-3'
    case 'md':
      return 'text-md px-6 py-2'
    default:
      return 'text-base px-6 py-3'
  }
})
</script>
