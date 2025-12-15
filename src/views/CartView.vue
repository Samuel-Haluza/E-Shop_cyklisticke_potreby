<template>
  <section class="cart-view">
    <h1>Váš Nákupný Košík</h1>
    <div v-if="cart.items.length > 0" class="cart-container">
      <div class="cart-items">
        <CartItem v-for="i in cart.items" :key="i.id" :item="i" />
      </div>
      <div class="cart-summary">
        <h3>Zhrnutie objednávky</h3>
        <div class="summary-row">
          <span>Počet položiek:</span>
          <strong>{{ totalItems }}</strong>
        </div>
        <div class="summary-row total">
          <span>Spolu:</span>
          <strong>{{ cart.totalPrice.toFixed(2) }} €</strong>
        </div>
        <button class="checkout-btn">Prejsť na platbu</button>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p class="empty-icon">🛒</p>
      <h2>Váš košík je prázdny</h2>
      <p>Pozrite si naše <router-link to="/products">produkty</router-link> a začnite s nákupom!</p>
    </div>
  </section>
</template>

<script>
import { useCartStore } from '../stores/cartStore'
import CartItem from '../components/CartItem.vue'

export default {
  components: { CartItem },
  computed: {
    cart() {
      return useCartStore()
    },
    totalItems() {
      return this.cart.items.reduce((sum, i) => sum + i.quantity, 0)
    }
  }
}
</script>

<style scoped>
.cart-view {
  animation: fadeIn 0.6s ease;
}

.cart-view h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-size: 2.5rem;
}

.cart-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
}

.cart-items {
  flex: 1;
}

.cart-summary {
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 8px;
  height: fit-content;
  position: sticky;
  top: 100px;
}

.cart-summary h3 {
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-size: 1.3rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  color: #666;
}

.summary-row.total {
  border: none;
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: bold;
  margin: 1rem 0;
  padding: 1rem 0;
}

.checkout-btn {
  width: 100%;
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.checkout-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--light-bg);
  border-radius: 8px;
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.empty-cart h2 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.empty-cart p {
  color: #666;
  font-size: 1.1rem;
}

.empty-cart a {
  color: var(--primary-color);
  font-weight: 600;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .cart-container {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }

  .cart-view h1 {
    font-size: 1.8rem;
  }
}
</style>