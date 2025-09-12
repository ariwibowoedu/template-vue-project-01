<template>
  <div class="relative w-full mt-12">
    <div class="absolute right-6 -top-4">
      <div class="flex gap-2 mb-2">
        <button
          type="button"
          v-for="btn in buttons"
          :key="btn.type"
          class="px-3 py-1 text-sm border rounded bg-light"
          @click="insertList(btn.type)"
        >
          <feather-icon :icon="btn.icon" classes="w-4 h-4" />
        </button>
      </div>
    </div>
    <label
      v-if="label"
      :for="id"
      class="absolute -top-2.5 left-4 px-1 bg-white text-sm font-medium text-gray-700"
    >
      {{ label }}
    </label>

    <textarea
      :id="id"
      v-model="model"
      @keydown.enter.prevent="handleEnter"
      @keydown="handleShortcuts"
      :placeholder="placeholder"
      class="w-full px-3 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      :rows="rows"
    ></textarea>
  </div>
</template>

<script setup>
import FeatherIcon from '@/utils/FeatherIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: 'smart-textarea',
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
    default: 6,
  },
})

const buttons = [
  { type: 'number', icon: 'list' },
  { type: 'dash', icon: 'minus' },
  { type: 'dot', icon: 'list' },
]

const emit = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

/**
 * Auto list on Enter
 */
function handleEnter(e) {
  const textarea = e.target
  const start = textarea.selectionStart
  const end = textarea.selectionEnd

  const textBefore = model.value.substring(0, start)
  const textAfter = model.value.substring(end)

  const lines = textBefore.split('\n')
  const lastLine = lines[lines.length - 1]

  let insertText = '\n'

  // Numbered list
  const matchNumber = lastLine.trim().match(/^(\d+)\.\s/)
  if (matchNumber) {
    const nextNumber = parseInt(matchNumber[1]) + 1
    insertText += nextNumber + '. '
    if (lastLine.trim() === `${matchNumber[1]}.`) insertText = '\n'
  }

  // Bullet list (-)
  else if (lastLine.trim().startsWith('-')) {
    insertText += '- '
    if (lastLine.trim() === '-') insertText = '\n'
  }

  // Dot list (•)
  else if (lastLine.trim().startsWith('•')) {
    insertText += '• '
    if (lastLine.trim() === '•') insertText = '\n'
  }

  // default newline
  model.value = textBefore + insertText + textAfter

  setTimeout(() => {
    textarea.selectionStart = textarea.selectionEnd = start + insertText.length
  })
}

/**
 * Keyboard Shortcuts
 * - Ctrl+Shift+7 → Numbered list
 * - Ctrl+Shift+8 → Bullet list
 * - Ctrl+Shift+9 → Dot list
 */
function handleShortcuts(e) {
  if (e.ctrlKey && e.shiftKey) {
    const textarea = e.target
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    const textBefore = model.value.substring(0, start)
    const textAfter = model.value.substring(end)

    if (e.key === '7') {
      e.preventDefault()
      model.value = textBefore + '1. ' + textAfter
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 3
      })
    }

    if (e.key === '8') {
      e.preventDefault()
      model.value = textBefore + '- ' + textAfter
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2
      })
    }

    if (e.key === '9') {
      e.preventDefault()
      model.value = textBefore + '• ' + textAfter
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2
      })
    }
  }
}

function insertList(type) {
  const textarea = document.querySelector('textarea')
  if (!textarea) return

  const start = textarea.selectionStart
  const end = textarea.selectionEnd

  const textBefore = model.value.substring(0, start)
  const textAfter = model.value.substring(end)

  let prefix = ''
  if (type === 'number') prefix = '1. '
  if (type === 'dash') prefix = '- '
  if (type === 'dot') prefix = '• '

  model.value = textBefore + prefix + textAfter

  setTimeout(() => {
    textarea.selectionStart = textarea.selectionEnd = start + prefix.length
  })
}
</script>
