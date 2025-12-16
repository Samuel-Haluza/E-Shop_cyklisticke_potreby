<template>
  <section class="product-detail">
    <router-link to="/products" class="back-link">← Späť na produkty</router-link>
    <div class="detail-container">
      <div class="product-display">
        <div class="product-image-large">
          {{ getIcon(currentProduct.name) }}
        </div>
      </div>
      <div class="product-details">
        <h1>{{ currentProduct.name }}</h1>
        <PriceSection :price="currentProduct.price" />
        <p class="description">Detailný popis produktu: {{ currentProduct.detail }}</p>
        <div class="actions">
          <button class="add-to-cart" @click="addToCart">Pridať do košíka</button>
          <router-link to="/products" class="continue-shopping">Ďalší nákup</router-link>
        </div>
      </div>
    </div>
    <ProductRating :rating="currentProduct.rating" :reviewCount="currentProduct.reviewCount" @review-submitted="onReviewSubmitted" />
  </section>
</template>

<script>
import { useCartStore } from '../stores/cartStore'
import PriceSection from '../components/PriceSection.vue'
import ProductRating from '../components/ProductRating.vue'

export default {
  components: { PriceSection, ProductRating },
  data() {
    return {
      allProducts: [
        { id: 1, name: 'Bicykel', price: 800, detail: 'Vynikajúci horský bicykel s moderným dizajnom. Vhodný pre všetky typy terénu s pevným rámom a kvalitným systémom prepínania. Ideálny pre trailové jazdy aj rekreačnú jazdu v prírode.', rating: 4.8, reviewCount: 32 },
        { id: 2, name: 'Prilba', price: 60, detail: 'Bezpečnostná cyklistická prilba s vetraním a pohodlným polstrovaním. Chráni vašu hlavu pri páde a ponúka maximálnu bezpečnosť. Dostupná v rôznych veľkostiach a farbách.', rating: 4.6, reviewCount: 18 },
        { id: 3, name: 'Rukavice', price: 25, detail: 'Pohodlné cyklistické rukavice s gelovou výplňou na dlani. Poskytujú lepšiu priľnavosť a ochranu pri dlhších jazdách. Ideálne pre všetky ročné obdobia s reflexnými prvkami.', rating: 4.3, reviewCount: 24 },
        { id: 4, name: 'Cyklistický dres', price: 45, detail: 'Ľahký a dýchavý cyklistický dres z vysokojakovostného materiálu. Perfektný odvádzač vlhkosti a pohodlie počas intenzívnej jazdy. Moderný dizajn s cyklom vzormi.', rating: 4.5, reviewCount: 15 },
        { id: 5, name: 'Cyklistické nohavice', price: 70, detail: 'Ergonomické cyklistické nohavice s polstrovaním pre maximálny komfort. Elastický materiál umožňuje ľahký pohyb a dobrú cirkuláciu vzduchu. Ideálne pre dlhé cyklistické trasy.', rating: 4.7, reviewCount: 22 },
        { id: 6, name: 'Cyklistické topánky', price: 120, detail: 'Profesionálne cyklistické topánky s tuhú podrážkou pre efektívne pedálovanie. Systém uzavretia SPD kompatibilný s väčšinou pedálov. Ponúka maximálnu stabilitu a podporu.', rating: 4.4, reviewCount: 28 },
        { id: 7, name: 'Fľaša na vodu', price: 15, detail: 'Ergonomická fľaša na vodu s kapacitou 750 ml. Vyrobená z bezpečného materiálu bez BPA. Ľahko sa upevňuje na bicykel a pomáha vám zostať hydratovaný počas cesty.', rating: 4.2, reviewCount: 12 },
        { id: 8, name: 'Pumpa na bicykel', price: 30, detail: 'Prenosná bicyklová pumpa s veľkou účinnosťou. Kompatibilná s francúzskymi aj anglickými ventilmi. Ideálna pre domácnosť i cestovanie s manometrom.', rating: 4.5, reviewCount: 19 },
        { id: 9, name: 'Cyklistické okuliare', price: 50, detail: 'Štýlové cyklistické okuliare s UV ochranou. Chránia oči pred slnkom, vetrom a nečistotami počas jazdy. Ľahký rámik a pohodlné nosidlo pre dlhodobé nosenie.', rating: 4.9, reviewCount: 35 }
      ]
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    currentProduct() {
      return this.allProducts.find(p => p.id === parseInt(this.id)) || { id: 0, name: 'Produkt nenájdený', price: 0 }
    }
  },
  methods: {
    addToCart() {
      if (this.currentProduct.id !== 0) {
        useCartStore().addToCart(this.currentProduct)
        this.$router.push('/cart')
      }
    },
    getIcon(name) {
      if (name.toLowerCase().includes('bicykel')) return '🚲'
      if (name.toLowerCase().includes('prilba')) return '🎽'
      if (name.toLowerCase().includes('rukavice')) return '🧤'
      if (name.toLowerCase().includes('dres')) return '👕'
      if (name.toLowerCase().includes('nohavice')) return '👖'
      if (name.toLowerCase().includes('topánky')) return '👟'
      if (name.toLowerCase().includes('fľaša')) return '🧴'
      if (name.toLowerCase().includes('pumpa')) return '💨'
      if (name.toLowerCase().includes('okuliare')) return '🕶️'
      return '📦'
    },
    onReviewSubmitted(review) {
      if (this.currentProduct.id !== 0) {
        // Aktualizuj hodnotenie (jednoduché spriemerovanie)
        this.currentProduct.reviewCount++
        this.currentProduct.rating = ((this.currentProduct.rating * (this.currentProduct.reviewCount - 1)) + review.rating) / this.currentProduct.reviewCount
        alert('Ďakujeme za vašu recenziu!')
      }
    }
  }
}
</script>

<style scoped>
.product-detail {
  animation: fadeIn 0.6s ease;
}

.back-link {
  display: inline-block;
  color: var(--primary-color);
  margin-bottom: 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-link:hover {
  transform: translateX(-5px);
}

.detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.product-display {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image-large {
  font-size: 10rem;
  background: linear-gradient(135deg, var(--primary-light), var(--primary-color));
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: bounce 3s infinite;
}

.product-details {
  display: flex;
  flex-direction: column;
}

.product-details h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.price-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.price {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: bold;
  margin: 0;
}

.availability {
  background: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.description {
  color: #666;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.add-to-cart {
  flex: 1;
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

.add-to-cart:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
}

.continue-shopping {
  flex: 1;
  background: var(--light-bg);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.continue-shopping:hover {
  background: var(--primary-color);
  color: white;
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
  .detail-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .product-details h1 {
    font-size: 1.8rem;
  }

  .product-image-large {
    font-size: 6rem;
  }
}
</style>