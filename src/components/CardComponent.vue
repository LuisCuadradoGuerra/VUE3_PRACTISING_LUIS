<template>
  <div class="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
    <h2 class="text-xl font-semibold mb-2">{{ title }}</h2>
    <p class="text-gray-600">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>
