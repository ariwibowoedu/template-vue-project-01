<template>
  <i :data-feather="icon" :class="classes" ref="iconEl" aria-hidden="true"></i>
</template>

<script setup>
import { onMounted, ref, onUpdated } from 'vue'
import feather from 'feather-icons'

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    default: '',
  },
})

const iconEl = ref(null)

onMounted(() => {
  feather.replace({ class: props.classes })
})

onUpdated(() => {
  feather.replace({ class: props.classes })
})
</script>