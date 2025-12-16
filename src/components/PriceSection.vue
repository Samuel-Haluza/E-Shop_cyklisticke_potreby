<template>
  <div class="price-section">
    <p class="price">{{ price }} €</p>
    <span class="availability">Dostupné skladom</span>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.price-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.price {
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: bold;
  margin: 0;
  min-width: fit-content;
}

.availability {
  background: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>
