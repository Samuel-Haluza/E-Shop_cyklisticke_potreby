<template>
  <Navbar />
  <main class="container">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>
<style scoped>
.container {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 100%;
  animation: fadeIn 0.4s ease-in;
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
  .container {
    padding: 1rem;
  }
}
</style>