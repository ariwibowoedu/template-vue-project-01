<template>
  <div class="fixed top-4 right-4 flex flex-col gap-2 z-50">
    <transition-group name="toast" tag="div" class="flex flex-col gap-2">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="px-4 py-2 rounded-md shadow-lg text-dark bg-white border-l-8"
        :class="
          toast.type === 'success'
            ? 'border-green-500 text-green-500'
            : 'border-red-500 text-red-500'
        "
      >
        <div class="flex items-center gap-2">
          <span>{{ toast.message }}</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { useToast } from '@/composables/useToast'
const { toasts } = useToast()
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.toast-leve-from {
  opacity: 1;
  transform: translateY(0);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>