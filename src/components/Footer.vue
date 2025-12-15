<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <h3>BikeShop</h3>
        <p>Vaša source pre všetky cyklistické potreby</p>
      </div>
      <div class="footer-info">
        <p><strong>Adresa:</strong> Bratislava, Slovakia</p>
        <p><strong>Email:</strong> info@bikeshop.sk</p>
        <p><strong>Telefón:</strong> +421 2 1234 5678</p>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 BikeShop. Všetky práva vyhradené.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--text-color) 0%, #1a1a1a 100%);
  color: white;
  margin-top: auto;
  padding: 3rem 2rem 1rem;
  text-align: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  margin-bottom: 2rem;
}

.footer-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary-light);
}

.footer-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
}

.footer-info p {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1rem 1rem;
  }

  .footer-info {
    grid-template-columns: 1fr;
  }
}
</style>