<template>
  <div class="relative w-full">
    <!-- Label -->
    <label
      v-if="label"
      :for="id"
      class="absolute -top-2.5 left-4 px-1 bg-white text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>

    <!-- Textarea -->
    <textarea
      :id="id"
      v-model="internalValue"
      :placeholder="placeholder"
      class="w-full px-3 py-3 border rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/70 focus:border-primary shadow-sm transition-all duration-200"
      :rows="rows"
    ></textarea>
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
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Write something...',
  },
  rows: {
    type: Number,
    default: 4,
  },
})

const emit = defineEmits(['update:modelValue'])

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>
