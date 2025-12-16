# 🚴 Cyklistický E-Shop

Moderný e-shop pre cyklistických produktov vytvorený s Vue.js 3 a Pinia state management.

## 📋 Popis Projektu

Cyklistický E-Shop je webová aplikácia, ktorá ponúka predaj rôznych cyklistických produktov a príslušenstva. Aplikácia umožňuje užívateľom prehliadať produkty, čítať ich detaily, pridávať ich do košíka a opustiť recenzie.

## ✨ Hlavné Funkcie

- 🛍️ **Katalóg produktov** - Prehliadanie 9 rôznych cyklistických produktov
- 🛒 **Nákupný košík** - Pridávanie, odoberanie a správa produktov v košíku
- ⭐ **Recenzie a hodnotenia** - Užívatelia môžu opustiť recenzie na produkty
- 💾 **Persistencia dát** - Košík sa ukladá do localStorage
- 📱 **Responzívny dizajn** - Funkčné na všetkých zariadeniach
- 🔀 **Viacero podstránok** - Domov, Produkty, Detail produktu, Košík, O nás, Kontakt

## 🛠️ Technológie

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Client-side routing
- **Pinia** - State management store
- **Vite** - Lightning fast build tool
- **HTML 5** - Sémantické značky
- **CSS 3** - Moderný styling s CSS premennými

## 📂 Štruktúra Projektu

```
src/
├── components/          # Reusable komponenty
│   ├── CartItem.vue    # Položka v košíku
│   ├── Footer.vue      # Pätička
│   ├── NavBar.vue      # Navigácia
│   ├── ProductCard.vue # Karta produktu
│   ├── PriceSection.vue# Cena a dostupnosť
│   └── ProductRating.vue# Recenzie
├── views/              # Page komponenty
│   ├── HomeView.vue
│   ├── ProductsView.vue
│   ├── ProductDetailView.vue
│   ├── CartView.vue
│   ├── AboutView.vue
│   └── ContactView.vue
├── stores/             # Pinia stores
│   ├── cartStore.js    # Správa košíka
│   └── productStore.js # Správa produktov
├── router/
│   └── index.js        # Konfigurácia routeru
└── assets/
    └── *.css           # Globálne štýly
```

## 🚀 Inštalácia a Spustenie

### Požiadavky
- Node.js 14+
- npm alebo yarn

### Kroky

1. **Klonuj repozitár**
```bash
git clone https://github.com/tvoj-username/cyklistickeshop.git
cd cyklistickeshop
```

2. **Nainštaluj závislosti**
```bash
npm install
```

3. **Spusti vývojový server**
```bash
npm run dev
```

4. **Otvori prehliadač**
```
http://localhost:5173
```

## 📦 Build pre Produkciu

```bash
npm run build
```

Výstup sa generuje do `dist/` priečinka.

## 🎨 Komponenty

### CartItem.vue
Zobrazuje jednotlivú položku v nákupnom košíku s možnosťou zmeny množstva a vymazania.

### ProductCard.vue
Karta produktu v katalógu s menom, cenou a tlačítkami pre pridanie do košíka.

### PriceSection.vue
Reusable komponenta na zobrazenie ceny a dostupnosti produktu.

### ProductRating.vue
Komponenta s hviezdicovým hodnotením a možnosťou opustenia recenzie.

### NavBar.vue
Navigačná lišta s odkazmi na všetky stránky a počítadlom položiek v košíku.

### Footer.vue
Pätička so základnými informáciami.

## 💾 State Management (Pinia)

### cartStore.js
- `items` - Zoznam položiek v košíku
- `addToCart()` - Pridajte produkt do košíka
- `decreaseQuantity()` - Znížte množstvo produktu
- `removeFromCart()` - Vymažte produkt
- `totalPrice` - Celková cena
- `cartItemCount` - Počet položiek

### productStore.js
- `products` - Zoznam všetkých produktov
- `getAllProducts` - Getter pre všetky produkty
- `getProductById()` - Getter pre konkrétny produkt
- `getProductCount` - Getter pre počet produktov

## 💾 localStorage

Košík sa automaticky ukladá do `localStorage`, čo znamená že:
- Dáta ostanú aj po zatvorení stránky
- Refresh stránky nezmení obsah košíka
- Dáta sa ukladajú lokálne na disku užívateľa

## 🎯 Minimálne Kritériá (Splnené)

- ✅ Vue Router pre viacero podstránok
- ✅ Pinia pre state management
- ✅ 6 reusable komponentov (CartItem, ProductCard, Footer, NavBar, PriceSection, ProductRating)
- ✅ Bez JavaScript chýb
- ✅ Vue.js 3, HTML 5, CSS 3
- ✅ Options API
- ✅ GitHub repozitár
- ✅ Unikátny projekt

## ⭐ Plusové Body (Implementované)

- ✅ Persistencia dát v localStorage
- ✅ Centralizovaný product store
- ✅ Optimalizované data management
- ✅ Responzívny dizajn
- ✅ Reusable komponenty
- ✅ Props/Emit komunikácia

## 👨‍💻 Autor

Samuel

## 📝 Licencia

MIT License

## 🔗 Užitočné Linky

- [Vue.js Dokumentácia](https://vuejs.org/)
- [Pinia Dokumentácia](https://pinia.vuejs.org/)
- [Vue Router Dokumentácia](https://router.vuejs.org/)
- [Vite Dokumentácia](https://vitejs.dev/)

---

Vytvorené s ❤️ pre Frontendové Technológie
