<template>
  <button
    :type="type"
    :class="[
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      { 'opacity-50 cursor-not-allowed': disabled },
    ]"
    :disabled="disabled"
    @click="$emit('onClick', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
})
const baseClasses =
  'rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary/30 focus:ring-primary',
  secondary: 'bg-secondary text-white hover:bg-secondary/30 focus:ring-secondary',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  outline: 'border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400',
}

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}
</script>
