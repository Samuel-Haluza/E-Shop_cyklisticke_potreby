<template>
  <button @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {}
</script>
<style scoped>
.btn {
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

.btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(30, 144, 255, 0.3);
}
</style>