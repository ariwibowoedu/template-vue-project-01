<template>
  <div class="fixed top-4 right-4 flex flex-col gap-2 z-50">
    <transition-group name="toast" tag="div" class="flex flex-col gap-2">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="px-4 py-3 rounded-lg shadow-lg bg-white border-r-8 flex items-center gap-2 min-w-[220px] max-w-xs"
        :class="
          toast.type === 'success'
            ? 'border-green-500 text-green-600 bg-green-100'
            : 'border-red-500 text-red-600 bg-red-100'
        "
      >
        <span>{{ toast.message }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
import { useToast } from '@/stores/useToast'
const { toasts } = useToast()
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}

.toast-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.toast-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.95);
}
</style>
