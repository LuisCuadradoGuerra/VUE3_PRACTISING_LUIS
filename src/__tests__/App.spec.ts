import { describe, it, expect, vi } from 'vitest'
import CardView from '@/pages/CardView.vue'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Where dreams come true')
  })
})

// Rutas simuladas
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: CardView },
    { path: '/selection', name: 'Selection', component: { template: '<div>Selection</div>' } },
  ],
})

describe('CardView', () => {
  it('navega a /selection al hacer clic en "Avanzar"', async () => {
    // Espiamos el método push del router
    router.push = vi.fn()

    const wrapper = mount(CardView, {
      global: {
        plugins: [router],
      },
    })

    // Encuentra el botón
    const button = wrapper.get('button')

    // Dispara el clic
    await button.trigger('click')

    // Verifica que se llamó a router.push con la ruta correcta
    expect(router.push).toHaveBeenCalledWith('selection')
  })
})
