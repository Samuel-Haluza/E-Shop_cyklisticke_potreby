# 🚴 Cyklistický E-Shop

Webová aplikácia - e-shop s bicyklickými potrebami vytvorený v rámci predmetu Frontendové technológie.

## Popis Projektu

E-Shop s katalógom bicyklických produktov. Aplikácia umožňuje prehliadanie produktov, správu nákupného košíka a komunikáciu so zákazníckym servisom.

## Funkčnosť

- **Katalóg produktov** - Prehliadanie a vyhľadávanie rôznych bicyklických produktov
- **Nákupný košík** - Pridávanie, odoberanie a správa množstiev položiek, ukladanie do localStorage
- **Detail produktu** - Podrobné informácie vrátane popisu, ceny, dostupnosti
- **Recenzie a hodnotenia** - Možnosť čítania a písania recenzií s hviezdicovým hodnotením
- **Interaktívna mapa** - Mapa lokalizácie predajného miesta s Leaflet integráciou
- **Viacero podstránok** - Navigácia medzi stránkami (Home, Products, Cart, About, Contact)
- **Kontaktný formulár** - Komunikácia so zákazníckym servisom
- **Responzívny dizajn** - Optimalizácia pre mobilné zariadenia, tablety a počítače

## Technológie

- **Vue.js 3.5.25** - JavaScript framework pre interaktívne UI
- **Vue Router 4.6.3** - Client-side routing medzi stránkami
- **Pinia 3.0.4** - State management pre globálny stav aplikácie
- **Vite 7.2.4** - Rýchly build nástroj a dev server
- **Leaflet 1.9.4** - Open-source knižnica pre interaktívne mapy
- **HTML 5** - Sémantické HTML značky
- **CSS 3** - Moderný styling s flexbox a grid layoutom

## Štruktúra Projektu

```
src/
├── components/          # Opätovne použiteľné komponenty
│   ├── CartItem.vue
│   ├── Footer.vue
│   ├── NavBar.vue
│   ├── PriceSection.vue
│   ├── ProductCard.vue
│   └── ProductRating.vue
├── views/              # Stránky (6 podstránok)
│   ├── HomeView.vue
│   ├── ProductsView.vue
│   ├── ProductDetailView.vue
│   ├── CartView.vue
│   ├── AboutView.vue
│   └── ContactView.vue
├── stores/             # Pinia state management
│   ├── cartStore.js
│   └── productStore.js
├── router/
│   └── index.js        # Vue Router konfigurácia
└── assets/
    └── CSS súbory
```

## Inštalácia a Spustenie

```bash
# Inštalácia závislostí
npm install

# Spustenie vývojového servera
npm run dev

# Build pre produkciu
npm run build

# Nasadenie na GitHub Pages
npm run deploy
```

Aplikácia bude dostupná na `http://localhost:5173`

## Komponenty (6+ opätovne použiteľných)

1. **CartItem.vue** - Položka v nákupnom košíku s možnosťou zmeny počtu kusov a odobrania
2. **Footer.vue** - Pätička stránky so základnými informáciami a linkami
3. **NavBar.vue** - Navigačná lišta s linkami na všetky časti aplikácie a počítadlom v košíku
4. **PriceSection.vue** - Komponent zobrazujúci cenu, dostupnosť a informácie o produkte
5. **ProductCard.vue** - Karta produktu v katalógu s obrázkom, názvom, cenou a možnosťou pridania do košíka
6. **ProductRating.vue** - Komponent s hviezdicovým hodnotením a sekciou recenzií od užívateľov

## State Management (Pinia)

**cartStore.js** - Správa nákupného košíka
- `items` - Pole produktov v košíku
- `addToCart(product)` - Pridanie produktu do košíka
- `removeFromCart(productId)` - Odobratie produktu z košíka
- `decreaseQuantity(productId)` - Zmenšenie počtu kusov produktu
- `totalPrice` - Výpočet celkovej ceny všetkých položiek
- `cartItemCount` - Počítadlo počtu položiek v košíku
- Persistencia dát do localStorage - Košík sa ukladá lokálne v prehliadači

**productStore.js** - Správa katalógu produktov
- `products` - Pole všetkých dostupných produktov
- `getAllProducts()` - Getter vracia všetky produkty
- `getProductById(id)` - Vyhľadávanie konkrétneho produktu podľa ID
- `getProductCount` - Počet produktov v katalógu
- `searchProducts(query)` - Vyhľadávanie produktov podľa názvu alebo popisu

## Stránky Aplikácie

**HomeView.vue** - Domovská stránka s úvodným obsahom a highlights produktov

**ProductsView.vue** - Katalóg všetkých produktov s možnosťou filtrácií a sortovacích opcií

**ProductDetailView.vue** - Detailná stránka konkrétneho produktu s:
- Podrobným opisom
- Cenou a dostupnosťou
- Recenziami užívateľov
- Možnosťou pridania do košíka

**CartView.vue** - Nákupný košík obsahujúci:
- Zoznam všetkých vybraných produktov
- Možnosť zmeny počtu kusov
- Odobratie produktov
- Výpočet celkovej ceny
- Tlačítko pre pokračovanie k objednávke

**AboutView.vue** - Stránka s informáciami o spoločnosti a jej histórii

**ContactView.vue** - Kontaktný formulár pre komunikáciu so zákazníckym servisom

## Interaktívna Mapa (Leaflet)

Aplikácia obsahuje integráciu **Leaflet** mapovej knižnice:
- **Zobrazenie lokácie predajného miesta** na interaktívnej mape
- **OpenStreetMap podkladové mapy** - bezplatný zdroj mapových dát
- **Zoomovanie a pozorovanie** - užívatelia môžu priblížiť/oddaliť a navigovať po mape
- **Markery lokácií** - označenie pozície predajne s pop-up informáciami
- **Responzívna mapa** - správne zobrazenie na všetkých veľkostiach obrazoviek
- **Integrácia do stránky** - mapa sa nachádza na kontaktnej stránke alebo v About sekcii

## Mapové API

Aplikácia využíva **Leaflet JavaScript API** - open-source knižnicu pre interaktívne mapy:

- **L.map()** - Inicializácia mapového objektu a nastavenie počiatočného pohľadu
- **L.tileLayer()** - Integrácia OpenStreetMap ako podkladovej mapy (tile provider API)
- **L.marker()** - Vytvárame a správujeme markery na mape cez API
- **L.popup()** - Zobrazovanie pop-up informácií cez API s opisom lokácie
- **setView(), zoomIn(), zoomOut()** - API metódy na kontrolu mapy a nastavenie úrovne zoomu
- **on('click'), on('zoom')** - Event listening cez Leaflet API pre interakcie užívateľa
- **getBounds(), fitBounds()** - API metódy na manipuláciu s viditeľnou oblasťou mapy

Leaflet API je postavený na princípoch REST a poskytuje kompletnú funkcionalitu pre prácu s mapovými dátami a interakciami bez nutnosti vlastného backendu. API je jednoduché na používanie, čo umožňuje rýchlu implementáciu mapovej funkcionalnosti do Vue.js aplikácie.

## Splnené Požiadavky Predmetu

✅ **Vue Router** - 6 podstránok (Home, Products, Product Detail, Cart, About, Contact) s navigáciou  
✅ **Pinia State Management** - Správa košíka a katalógu produktov s persistenciou  
✅ **6+ Komponentov** - CartItem, Footer, NavBar, PriceSection, ProductCard, ProductRating  
✅ **Vue.js 3** - Verzia 3.5.25  
✅ **HTML 5 a CSS 3** - Sémantické HTML a moderné CSS štýly  
✅ **Options API** - Všetky komponenty napísané v Options API  
✅ **Props/Emit komunikácia** - Správna výmena dát medzi komponentmi  
✅ **Bez JavaScript chýb** - Bez chýb a varovania v konzole  
✅ **Verejný GitHub repozitár** - Zdrojový kód dostupný na GitHube  
✅ **GitHub Pages** - Aplikácia nasadená a dostupná online  
✅ **Unikátny projekt** - E-shop so špecifickým zameraním na bicyklické potreby  
✅ **Leaflet Mapa** - Integrácia interaktívnej mapy do aplikácie  
✅ **localStorage** - Persistencia nákupného košíka  

## Vyslaný GitHub Repozitár

https://github.com/sampleuser/cyklistickeshop

## Autor

Samuel Haluza

## Licencia

MIT
