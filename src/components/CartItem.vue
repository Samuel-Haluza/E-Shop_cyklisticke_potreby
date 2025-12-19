<template>
  <div class="cart-item">
    <div class="item-icon">{{ getIcon(item.name) }}</div>
    <div class="item-details">
      <h4 class="item-name">{{ item.name }}</h4>
      <p class="item-quantity">Množstvo: {{ item.quantity }}</p>
      <p class="item-total">Spolu: {{ (item.price * item.quantity).toFixed(2) }} €</p>
    </div>
    <PriceSection :price="item.price" />
      
    <div class="item-actions">
      <button class="remove-btn" @click="remove">Odstrániť jeden kus</button>
      <button class="remove-btn" @click="removeFromCart">Všetky kusy</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'
import PriceSection from './PriceSection.vue'
import { getIcon } from '../utils/iconHelpers'

export default {
  props: { item: Object },
  components: { PriceSection },
  methods: {
    remove() {
      useCartStore().decreaseQuantity(this.item.id)
    },
    getIcon(name) {
      return getIcon(name)
    },
    removeFromCart() {
      useCartStore().removeFromCart(this.item.id)
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
  flex-shrink: 0;
}

.price-value {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--accent-color);
  margin: 0;
}

.item-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.remove-btn {
  background: #ff4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
}

.remove-btn:hover {
  background: #cc0000;
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(255, 68, 68, 0.3);
}

.remove-btn:active {
  transform: scale(0.98);
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