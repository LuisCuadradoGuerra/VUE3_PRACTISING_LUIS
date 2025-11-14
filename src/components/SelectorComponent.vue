<template>
  <select v-model="innerValue" class="border px-4 py-2 rounded w-60 text-gray-700">
    <option disabled value="">Selecciona una opción</option>
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: string
  options: string[]


}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const innerValue = ref(props.modelValue)

watch(innerValue, (value) => emit('update:modelValue', value))
watch(
  () => props.modelValue,
  (newValue) => (innerValue.value = newValue),
)
</script>
