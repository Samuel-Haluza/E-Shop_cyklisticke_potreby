<template>
  <section class="about-view">
    <h1>O BikeShop</h1>
    <div class="about-container">
      <div class="about-content">
        <h2>Naša História</h2>
        <p>
          BikeShop je rodinná spoločnosť, ktorá pôsobí v oblasti cyklistických potrieb už viac ako 10 rokov. 
          Naša vášeň pre bicyklistiku a kvalitu nás priviedla k tomu, aby sme ponúkali to najlepšie zo sveta 
          cyklistických produktov.
        </p>
        
        <h2>Naša Misia</h2>
        <p>
          Našou misiou je sprístupniť kvalitné cyklistické vybavenie každému. Vieme, že bicyklistika nie je len 
          sport, ale aj životný štýl, a chceme byť súčasťou vašej cesty.
        </p>

        <h2>Naše Hodnoty</h2>
        <ul class="values-list">
          <li><strong>Kvalita:</strong> Pracujeme len s overenými značkami</li>
          <li><strong>Transparentnosť:</strong> Férové ceny a bezpečný nákup</li>
          <li><strong>Podpora:</strong> Pomoc s výberom správneho produktu</li>
          <li><strong>Komunita:</strong> Podpora cyklistickej komunity</li>
        </ul>
      </div>

      <div class="team-section">
        <h2>Náš Tím</h2>
        <div class="team-grid">
          <div class="team-member">
            <span class="member-icon">👨‍💼</span>
            <h3>Ján Cyklista</h3>
            <p>Zakladateľ a CEO</p>
          </div>
          <div class="team-member">
            <span class="member-icon">👩‍💼</span>
            <h3>Mária Kradúnová</h3>
            <p>Vedúca operácií</p>
          </div>
          <div class="team-member">
            <span class="member-icon">👨‍🔧</span>
            <h3>Peter Opravár</h3>
            <p>Špecialista na servis</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.about-view {
  animation: fadeIn 0.6s ease;
}

.about-view h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.about-container {
  max-width: 900px;
  margin: 0 auto;
}

.about-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  margin-bottom: 2rem;
}

.about-content h2 {
  color: var(--primary-color);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.about-content h2:first-child {
  margin-top: 0;
}

.about-content p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.values-list {
  list-style: none;
  padding: 1.5rem 0;
}

.values-list li {
  padding: 1rem;
  margin-bottom: 0.5rem;
  background: var(--light-bg);
  border-left: 4px solid var(--primary-color);
  border-radius: 4px;
  color: #666;
}

.values-list strong {
  color: var(--primary-color);
}

.team-section {
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 8px;
}

.team-section h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.team-member {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.member-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.team-member h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.team-member p {
  color: #666;
  font-size: 0.9rem;
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
  .about-view h1 {
    font-size: 1.8rem;
  }

  .about-content,
  .team-section {
    padding: 1.5rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>