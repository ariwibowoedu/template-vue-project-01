<template>
  <div class="relative w-full">
    <!-- Textarea -->
    <textarea
      v-model="internalValue"
      :id="id"
      :placeholder="placeholder"
      :rows="rows"
      class="peer w-full px-3 pt-4 pb-2 border rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary shadow-sm transition-all duration-200"
    ></textarea>

    <!-- Floating Label -->
    <label
      v-if="label"
      :for="id"
      class="absolute left-3 top-1 text-gray-500 text-xs transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary px-1"
    >
      {{ label }}
    </label>

    <!-- Helper Text -->
    <p v-if="helper" class="mt-1 text-sm text-gray-500">{{ helper }}</p>

    <!-- Error Message -->
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: 'base-textarea',
  },
  label: String,
  placeholder: {
    type: String,
    default: ' ',
  },
  rows: {
    type: Number,
    default: 4,
  },
  helper: String,
  error: String,
})

const emit = defineEmits(['update:modelValue'])

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>
