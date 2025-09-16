<template>
  <div class="relative w-full">
    <!-- Input -->
    <input
      v-model="internalValue"
      :id="id"
      :type="computedType"
      :placeholder="placeholder"
      :required="required"
      class="peer w-full px-3 pt-4 pb-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition"
    />

    <!-- Floating label -->
    <label
      :for="id"
      class="absolute left-3 top-1 text-gray-500 text-xs transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary px-1"
    >
      {{ label }}
    </label>

    <!-- Password toggle -->
    <button
      v-if="type === 'password'"
      type="button"
      @click="togglePassword"
      class="absolute top-1/2 right-3 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 transition"
      :aria-label="showPassword ? 'Hide password' : 'Show password'"
    >
      <FeatherIcon :icon="showPassword ? 'eye-off' : 'eye'" class="w-5 h-5 text-gray-500" />
    </button>

    <!-- Helper -->
    <p v-if="helper" class="mt-1 text-sm text-gray-500">{{ helper }}</p>
    <!-- Error -->
    <p v-if="error" class="mt-1 text-sm text-red-500">{{ error }}</p>
  </div>
</template>


<script setup>
import { ref, computed, watch } from 'vue'
import FeatherIcon from '@/components/utils/FeatherIcon.vue'

const props = defineProps({
  modelValue: [String, Number],
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: ' ',
  },
  required: Boolean,
  helper: String,
  error: String,
})

const emit = defineEmits(['update:modelValue'])

const internalValue = ref(props.modelValue)
watch(internalValue, (val) => emit('update:modelValue', val))

const showPassword = ref(false)
const computedType = computed(() =>
  props.type === 'password' ? (showPassword.value ? 'text' : 'password') : props.type
)

function togglePassword() {
  showPassword.value = !showPassword.value
}
</script>
