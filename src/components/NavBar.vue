<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <span class="logo-icon">🚴</span>
        <router-link to="/" class="logo-text">BikeShop</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link" active-class="active">Domov</router-link>
        <router-link to="/products" class="nav-link" active-class="active">Produkty</router-link>
        <router-link to="/cart" class="nav-link cart-link" active-class="active">
          Košík <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
        </router-link>
        <router-link to="/about" class="nav-link" active-class="active">O nás</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Kontakt</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  setup() {
    const cartStore = useCartStore()
    return {
      cartStore
    }
  },
  computed: {
    cartCount() {
      return this.cartStore.cartItemCount
    }
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 1.8rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-link.active {
  background-color: var(--accent-color);
  color: white;
}

.cart-link {
  position: relative;
}

.cart-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 0.3rem;
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 0.5rem;
    justify-content: center;
  }
}
</style>