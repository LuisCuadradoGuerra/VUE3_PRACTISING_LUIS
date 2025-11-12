<template>
  <div class="text-center">
    <h1 class="text-2xl font-bold mb-4">Paso 2</h1>

    <div class="flex gap-4 justify-center">
      <SelectorComponent label="Opción A" :selected="selected === 'A'" @click="selected = 'A'" />
      <SelectorComponent label="Opción B" :selected="selected === 'B'" @click="selected = 'B'" />
    </div>

    <p class="mt-4">Seleccionado: {{ selected || 'Ninguno' }}</p>

    <button
      @click="$router.push('/')"
      class="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
    >
      ← Volver
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectorComponent from '@/components/SelectorComponent.vue'

const selected = ref<string | null>(null)
</script>
