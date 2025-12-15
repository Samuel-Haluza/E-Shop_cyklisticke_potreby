<template>
  <div class="cart-item">
    <div class="item-icon">{{ getIcon(item.name) }}</div>
    <div class="item-details">
      <h4 class="item-name">{{ item.name }}</h4>
      <p class="item-quantity">Množstvo: {{ item.quantity }}</p>
      <p class="item-total">Spolu: {{ (item.price * item.quantity).toFixed(2) }} €</p>
    </div>
    <div class="item-price">
      <p class="price-value">{{ item.price }} €</p>
    </div>
    <button class="remove-btn" @click="remove" title="Odstrániť z košíka">
      ✕
    </button>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
  props: { item: Object },
  methods: {
    remove() {
      useCartStore().removeFromCart(this.item.id)
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
.cart-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.cart-item:hover {
  box-shadow: var(--shadow);
  border-color: var(--primary-color);
}

.item-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.item-details {
  flex: 1;
}

.item-name {
  margin: 0 0 0.25rem 0;
  color: var(--text-color);
  font-size: 1.1rem;
}

.item-quantity,
.item-total {
  margin: 0.25rem 0;
  color: #666;
  font-size: 0.9rem;
}

.item-total {
  font-weight: bold;
  color: var(--primary-color);
}

.item-price {
  text-align: center;
  min-width: 80px;
}

.price-value {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--accent-color);
  margin: 0;
}

.remove-btn {
  background: #ff4444;
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.remove-btn:hover {
  background: #cc0000;
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(255, 68, 68, 0.3);
}

@media (max-width: 768px) {
  .cart-item {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .item-details {
    flex: 1 1 100%;
  }
}
</style>