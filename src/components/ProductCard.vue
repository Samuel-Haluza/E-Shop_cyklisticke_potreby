<template>
  <div class="product-card">
    <div class="product-image">
      <span class="product-icon">{{ getIcon(product.name) }}</span>
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-price">{{ product.price }} €</p>
      <div class="product-actions">
        <BaseButton @click="add" class="add-btn">Pridať do košíka</BaseButton>
        <router-link :to="'/products/' + product.id" class="detail-link">Detail →</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'
import BaseButton from './BaseButton.vue'

export default {
  props: { product: Object },
  components: { BaseButton },
  methods: {
    add() {
      useCartStore().addToCart(this.product)
    },
    getIcon(name) {
      if (name.toLowerCase().includes('bicykel')) return '🚲'
      if (name.toLowerCase().includes('prilba')) return '🎽'
      if (name.toLowerCase().includes('rukavice')) return '🧤'
      return '📦'
    }
  }
}
</script>

<style scoped>
.product-card {
  background: white;
  border-radius: 8px;
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.product-image {
  background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

.product-icon {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.product-info {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.product-price {
  font-size: 1.8rem;
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 1rem;
}

.product-actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
  flex-wrap: wrap;
}

.add-btn {
  flex: 1;
  min-width: 150px;
}

.detail-link {
  flex: 1;
  min-width: 80px;
  padding: 0.75rem 1.5rem;
  background: var(--light-bg);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.detail-link:hover {
  background: var(--primary-color);
  color: white;
}
</style>