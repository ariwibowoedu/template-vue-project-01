<template>
  <div class="relative">
    <label :for="id" class="absolute z-10 -top-2.5 left-4 px-1 bg-light block text-sm font-medium">
      {{ label }}
    </label>
    <input
      v-model="internalValue"
      :id="id"
      :type="computedType"
      :placeholder="placeholder"
      :required="required"
      class="w-full px-2 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <button
      v-if="type === 'password'"
      type="button"
      @click="togglePassword"
      class="absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100"
    >
      <span v-if="showPassword">
        <FeatherIcon icon="eye-off" class="w-5 h-5 text-gray-500" />
      </span>
      <span v-else>
        <FeatherIcon icon="eye" class="w-5 h-5 text-gray-500" />
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FeatherIcon from '@/components/utils/FeatherIcon.vue'

const props = defineProps({
  modelValue: String,
  label: String,
  id: String,
  type: { type: String, default: 'text' },
  placeholder: String,
  required: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const computedType = computed(() =>
  props.type === 'password' ? (showPassword.value ? 'text' : 'password') : props.type
)

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>