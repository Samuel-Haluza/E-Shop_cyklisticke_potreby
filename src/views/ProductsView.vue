<template>
  <section class="products-view">
    <h1>Naše Produkty</h1>
    <div class="products-grid">
      <ProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>
  </section>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        { id: 1, name: 'Bicykel', price: 800 },
        { id: 2, name: 'Prilba', price: 60 },
        { id: 3, name: 'Rukavice', price: 25 },
        { id: 4, name: 'Cyklistický dres', price: 45 },
        { id: 5, name: 'Cyklistické nohavice', price: 70 },
        { id: 6, name: 'Cyklistické topánky', price: 120 },
        { id: 7, name: 'Fľaša na vodu', price: 15 },
        { id: 8, name: 'Pumpa na bicykel', price: 30 },
        { id: 9, name: 'Cyklistické okuliare', price: 50 }
      ]
    }
  }
}
</script>

<style scoped>
.products-view {
  animation: fadeIn 0.6s ease;
}

.products-view h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
  font-size: 2.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
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
  .products-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .products-view h1 {
    font-size: 1.8rem;
  }
}
</style>
