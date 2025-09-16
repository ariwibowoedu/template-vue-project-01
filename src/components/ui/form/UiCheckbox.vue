<template>
  <div class="w-full">
    <!-- Label utama -->
    <p v-if="label" class="mb-2 text-sm font-medium text-gray-700">
      {{ label }}
    </p>

    <!-- Checkbox list -->
    <div class="space-y-2">
      <label
        v-for="(opt, index) in normalizedOptions"
        :key="index"
        class="flex items-center gap-2 cursor-pointer"
      >
        <input
          type="checkbox"
          class="text-primary focus:ring-primary/70 border-gray-300 rounded"
          :value="opt.value"
          v-model="internalValue"
        />
        <span class="text-gray-700">{{ opt.label }}</span>
      </label>
    </div>

    <!-- Helper text -->
    <p v-if="helper" class="mt-1 text-sm text-gray-500">{{ helper }}</p>

    <!-- Error text -->
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [Boolean, Array],
    default: () => [],
  },
  label: String,
  options: {
    type: Array,
    default: () => [], // bisa string atau object
  },
  helper: String,
  error: String,
})

const emit = defineEmits(['update:modelValue'])

/**
 * Kalau modelValue Boolean → single checkbox
 * Kalau modelValue Array   → checkbox group
 */
const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const normalizedOptions = computed(() => {
  if (!props.options.length) {
    // Kalau tidak ada options → jadikan single checkbox
    return [{ value: true, label: props.label || 'Checkbox' }]
  }
  return props.options.map((opt) => (typeof opt === 'string' ? { value: opt, label: opt } : opt))
})
</script>
