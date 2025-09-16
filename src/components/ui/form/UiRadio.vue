<template>
  <div class="w-full">
    <!-- Label utama -->
    <p v-if="label" class="mb-2 text-sm font-medium text-gray-700">
      {{ label }}
    </p>

    <!-- Daftar radio -->
    <div class="space-y-2">
      <label
        v-for="(opt, index) in normalizedOptions"
        :key="index"
        class="flex items-center gap-2 cursor-pointer"
      >
        <input
          type="radio"
          class="text-primary focus:ring-primary/70 border-gray-300"
          :name="id"
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
  modelValue: [String, Number],
  id: {
    type: String,
    default: 'base-radio',
  },
  label: String,
  options: {
    type: Array,
    default: () => [],
  },
  helper: String,
  error: String,
})

const emit = defineEmits(['update:modelValue'])

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

/**
 * Normalize options:
 * - String → { value: string, label: string }
 * - Object → { value, label }
 */
const normalizedOptions = computed(() =>
  props.options.map((opt) => (typeof opt === 'string' ? { value: opt, label: opt } : opt))
)
</script>
