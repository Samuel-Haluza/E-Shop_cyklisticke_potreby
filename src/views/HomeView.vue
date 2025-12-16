<template>
  <section class="home-view">
    <div class="hero">
      <h1 class="hero-title">Vitaj v BikeShop 🚴</h1>
      <p class="hero-subtitle">Tvoj obľúbený obchod so všetkými cyklistickými potrebami</p>
      <router-link to="/products" class="hero-btn">Pozrieť produkty</router-link>
    </div>

    <section class="features">
      <h2>Prečo si vybrať BikeShop?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <span class="feature-icon">⚡</span>
          <h3>Rýchla doprava</h3>
          <p>Doručíme vaš nákup do 2-3 dní</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">💎</span>
          <h3>Kvalita garantovaná</h3>
          <p>Len tie najlepšie značky a produkty</p>
        </div>
        <div class="feature-card">
          <span class="feature-icon">🛡️</span>
          <h3>Bezpečný nákup</h3>
          <p>Zabezpečené platby a 100% ochrana</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.home-view {
  animation: fadeIn 0.6s ease;
}

.hero {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  padding: 4rem 2rem;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: slideInDown 0.5s ease;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-btn {
  display: inline-block;
  background: var(--accent-color);
  color: white;
  padding: 0.75rem 2.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.hero-btn:hover {
  background: #ff5722;
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.features {
  margin-top: 3rem;
}

.features h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.feature-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>