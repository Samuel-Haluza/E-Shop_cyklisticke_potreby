<template>
  <section class="contact-view">
    <h1>Kontakt s nami</h1>
    <div class="contact-container">
      <div class="contact-info">
        <h2>Informácie o kontakte</h2>
        
        <div class="info-block">
          <span class="info-icon">📍</span>
          <div>
            <h3>Adresa</h3>
            <p>BikeShop<br>Ul. Cyklista 123<br>811 01 Bratislava, Slovakia</p>
          </div>
        </div>

        <div class="info-block">
          <span class="info-icon">📞</span>
          <div>
            <h3>Telefón</h3>
            <p>
              <a href="tel:+421212345678">+421 2 1234 5678</a><br>
              <span class="hours">Po-Pia: 9:00 - 17:00</span>
            </p>
          </div>
        </div>

        <div class="info-block">
          <span class="info-icon">✉️</span>
          <div>
            <h3>Email</h3>
            <p><a href="mailto:info@bikeshop.sk">info@bikeshop.sk</a></p>
          </div>
        </div>

        <div class="info-block">
          <span class="info-icon">🕐</span>
          <div>
            <h3>Otváracie hodiny</h3>
            <p>
              Pondelok - Piatok: 9:00 - 17:00<br>Sobota: 10:00 - 14:00<br>Nedeľa: Zatvorené</p>
          </div>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="submitForm">
        <h2>Pošlite nám správu</h2>
        
        <div class="form-group">
          <label for="name">Meno *</label>
          <input 
            v-model="form.name" 
            type="text" 
            id="name" 
            placeholder="Vaše meno"
            required
          >
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input 
            v-model="form.email" 
            type="email" 
            id="email" 
            placeholder="Váš email"
            required
          >
        </div>

        <div class="form-group">
          <label for="phone">Telefón</label>
          <input 
            v-model="form.phone" 
            type="tel" 
            id="phone" 
            placeholder="Váš telefón"
          >
        </div>

        <div class="form-group">
          <label for="subject">Predmet *</label>
          <input 
            v-model="form.subject" 
            type="text" 
            id="subject" 
            placeholder="Predmet správy"
            required
          >
        </div>

        <div class="form-group">
          <label for="message">Správa *</label>
          <textarea 
            v-model="form.message" 
            id="message" 
            placeholder="Vaša správa..."
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-btn">Odoslať správu</button>
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
      </form>
    </div>

    <div class="map-container">
      <div id="map" class="map"></div>
    </div>
  </section>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      successMessage: '',
      map: null
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      // Koordináty: Bratislava
      const location = [48.1486, 17.1077]
      
      // Vytvor mapu
      this.map = L.map('map').setView(location, 15)

      // Pridaj OpenStreetMap vrstvu
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 2
      }).addTo(this.map)

      // Vytvor vlastný ikony marker
      const customIcon = L.divIcon({
        html: `
          <div style="
            background-color: #1e90ff;
            border: 3px solid white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            cursor: pointer;
          ">
            🚲
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20],
        className: 'custom-marker'
      })

      // Pridaj marker
      const marker = L.marker(location, { icon: customIcon }).addTo(this.map)

      // Pridaj popup
      const popupContent = `
        <div style="font-family: Arial, sans-serif; min-width: 250px;">
          <h3 style="margin: 0 0 10px 0; color: #1e90ff; font-size: 1.1em;">🚲 BikeShop</h3>
          <p style="margin: 5px 0; font-size: 0.9em;">
            <strong>Adresa:</strong><br>
            Ul. Cyklista 123<br>
            811 01 Bratislava, Slovakia
          </p>
          <p style="margin: 8px 0; font-size: 0.9em;">
            <strong>Telefón:</strong><br>
            <a href="tel:+421212345678" style="color: #1e90ff; text-decoration: none;">+421 2 1234 5678</a>
          </p>
          <p style="margin: 8px 0; font-size: 0.9em;">
            <strong>Email:</strong><br>
            <a href="mailto:info@bikeshop.sk" style="color: #1e90ff; text-decoration: none;">info@bikeshop.sk</a>
          </p>
          <p style="margin: 8px 0; font-size: 0.9em;">
            <strong>Otváracie hodiny:</strong><br>
            Po-Pia: 9:00 - 17:00<br>
            So: 10:00 - 14:00<br>
            Ne: Zatvorené
          </p>
        </div>
      `

      marker.bindPopup(popupContent)
      marker.openPopup()
    },
    submitForm() {
      console.log('Správa odoslaná:', this.form)
      this.successMessage = 'Vaša správa bola úspešne odoslaná! Ozveme sa vám čoskoro.'
      
      setTimeout(() => {
        this.form = { name: '', email: '', phone: '', subject: '', message: '' }
        this.successMessage = ''
      }, 3000)
    }
  }
}
</script>

<style scoped>
.contact-view {
  animation: fadeIn 0.6s ease;
}

.contact-view h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--text-color);
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: stretch;
}

.map-container {
  background: white;
  padding: 0;
  border-radius: 8px;
  box-shadow: var(--shadow);
  overflow: hidden;
  width: 100%;
}

.map {
  width: 100%;
  height: 400px;
}

.contact-info {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
}

.contact-info h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.info-block {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
}

.info-block:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.info-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.info-block h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.info-block p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.info-block a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
}

.info-block a:hover {
  text-decoration: underline;
}

.hours {
  font-size: 0.9rem;
  color: #999;
  display: block;
  margin-top: 0.5rem;
}

.contact-form {
  background: var(--light-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.contact-form h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.1);
}

.submit-btn {
  width: 100%;
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.success-message {
  margin-top: 1rem;
  padding: 1rem;
  background: #4caf50;
  color: white;
  border-radius: 4px;
  text-align: center;
  font-weight: 500;
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
  .contact-view h1 {
    font-size: 1.8rem;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-info {
    order: 2;
  }

  .contact-form {
    order: 1;
  }

  .map {
    height: 300px;
  }
}
</style>