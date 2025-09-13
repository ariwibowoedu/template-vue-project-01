<template>
  <div class="flex items-center gap-2 w-full">
    <div class="relative w-full">
      <!-- ikon search kiri -->
      <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <FeatherIcon icon="search" class="w-5 h-5" />
      </span>

      <input
        type="text"
        :placeholder="placeholder"
        v-model="localQuery"
        class="w-full border rounded-2xl pl-10 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        @input="emitSearch"
      />

      <!-- tombol clear kanan -->
      <button
        v-if="localQuery"
        @click="clearSearch"
        type="button"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
      >
        <FeatherIcon icon="x" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import FeatherIcon from '@/components/utils/FeatherIcon.vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Search...',
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
