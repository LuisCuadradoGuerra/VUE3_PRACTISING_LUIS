<template>
  <button
    class="px-4 py-2 rounded border transition-all"
    :class="selected
      ? 'bg-blue-600 text-white border-blue-600'
      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    label: string
    selected: boolean
  }>()
</script>
