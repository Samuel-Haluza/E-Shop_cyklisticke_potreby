import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems')) || []
  }),
  actions: {
    addToCart(product) {
      const item = this.items.find(i => i.id === product.id)
      if (item) item.quantity++
      else this.items.push({ ...product, quantity: 1 })
      this.saveToLocalStorage()
    },
    decreaseQuantity(id) {
      const item = this.items.find(i => i.id === id)
      if (item) {
        item.quantity--
        if (item.quantity <= 0) {
          this.items = this.items.filter(i => i.id !== id)
        }
      }
      this.saveToLocalStorage()
    },
    removeFromCart(id) {
      this.items = this.items.filter(i => i.id !== id)
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },
    clearCart() {
      this.items = []
      this.saveToLocalStorage()
    }
  },
  getters: {
    totalPrice: state =>
      state.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    cartItemCount: state =>
      state.items.reduce((sum, i) => sum + i.quantity, 0)
  }
})