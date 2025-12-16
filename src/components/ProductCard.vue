<template>
  <div class="product-card">
    <div class="product-image">
      <span class="product-icon">{{ getIcon(product.name) }}</span>
    </div>
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <PriceSection :price="product.price" />
      <div class="product-actions">
        <button @click="add" class="add-btn">Pridať do košíka</button>
        <router-link :to="'/products/' + product.id" class="detail-link">Detail →</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'
import PriceSection from './PriceSection.vue'

export default {
  props: { product: Object },
  components: { PriceSection },
  methods: {
    add() {
      useCartStore().addToCart(this.product)
    },
    getIcon(name) {
      if (name.toLowerCase().includes('bicykel')) return '🚲'
      if (name.toLowerCase().includes('cyklistický dres')) return '🎽'
      if (name.toLowerCase().includes('rukavice')) return '🧤'
      if (name.toLowerCase().includes('prilba')) return '⛑️'
      if (name.toLowerCase().includes('fľaša')) return '🚰'
      if (name.toLowerCase().includes('pumpa')) return '🔧'
      if (name.toLowerCase().includes('okuliare')) return '🕶️'
      if (name.toLowerCase().includes('topánky')) return '👟'
      if (name.toLowerCase().includes('nohavice')) return '👖'
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

.product-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.add-btn {
  flex: 1;
  min-width: 150px;
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(30, 144, 255, 0.3);
}

.add-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.add-btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(30, 144, 255, 0.3);
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