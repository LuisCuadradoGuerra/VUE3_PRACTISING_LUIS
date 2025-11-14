<template>
  <div class="page">
    <div class="card">
      <h1 class="text-2xl font-bold mb-4">Selection Component</h1>

      <SelectorComponent
        v-model="selected"
        :options="['Opción A', 'Opción B', 'Opción C', 'Opción D', 'Opción E']"
      />

      <p class="mt-4">Seleccionado: {{ selected || 'Ninguno' }}</p>

      <button
        @click="$router.push('/')"
        class="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        ← Volver
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SelectorComponent from '@/components/SelectorComponent.vue'

const selected = ref('')
</script>

<style scoped>
/* ======= Select ======= */
label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
  text-align: left;
}

select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background-color: #f9fafb;
  font-size: 1rem;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='14' viewBox='0 0 20 20' width='14' xmlns='http://www.w3.org/2000/svg'><path d='M7 7l3 3 3-3' /></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;
  cursor: pointer;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

select:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  outline: none;
}

/* ======= Texto seleccionado ======= */
.selected-text {
  margin-top: 16px;
  font-size: 1rem;
  color: #444;
}

/* ======= Botón ======= */
button {
  margin-top: 24px;
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s;
}

button:hover {
  background-color: #1e40af;
}

button:active {
  transform: scale(0.97);
}
</style>
