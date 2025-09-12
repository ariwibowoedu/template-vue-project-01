<template>
  <div class="flex items-center gap-2 w-full">
    <input
      type="text"
      :placeholder="placeholder"
      v-model="localQuery"
      class="w-full border rounded-2xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      @input="emitSearch"
    />
    <button
      v-if="localQuery"
      @click="clearSearch"
      class="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
    >
      X
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  modelValue: {
    type: String,
    defaults: '',
  },
  placeholder: {
    type: String,
    defaults: 'Search....',
  },
})

const emit = defineEmits(['update:modelValue', 'search', 'clear'])
const localQuery = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    localQuery.value = val
  }
)

const emitSearch = () => {
  emit('update:modelValue', localQuery.value)
  emit('search', localQuery.value)
}

const clearSearch = () => {
  localQuery.value = ''
  emit('update:modelValue', '')
  emit('clear')
}
</script>