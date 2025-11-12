<template>
  <div class="text-center">
    <h1 class="text-2xl font-bold mb-4">Paso 1</h1>
    <CardComponent title="Bienvenido" text="Esta es la primera vista del asistente." />

    <button
      @click="$router.push('/selection')"
      class="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Avanzar →
    </button>
  </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue'
</script>
