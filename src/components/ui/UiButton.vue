<template>
  <button
    :type="type"
    :class="[
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      { 'opacity-50 cursor-not-allowed': disabled || loading },
    ]"
    :disabled="disabled || loading"
    @click="$emit('onClick', $event)"
  >
    <template v-if="loading">
      <!-- Spinner -->
      <span
        class="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin"
        :class="spinnerColors[variant]"
      ></span>
      <span class="ml-2">Loading...</span>
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
  loading: { type: Boolean, default: false }, // 🔥 tambahan prop
})

const baseClasses =
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 gap-2'

const variantClasses = {
  primary:
    'bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-400 shadow-sm hover:shadow-md',
  secondary:
    'bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 focus:ring-purple-400 shadow-sm hover:shadow-md',
  danger:
    'bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-700 focus:ring-red-500 shadow-sm hover:shadow-md',
  outline:
    'border border-gray-300 text-gray-800 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 focus:ring-gray-400',
}

const spinnerColors = {
  primary: 'border-white',
  secondary: 'border-white',
  danger: 'border-white',
  outline: 'border-gray-600',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}
</script>
