import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
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
  }),
  getters: {
    getAllProducts: (state) => state.products,
    getProductById: (state) => (id) => {
      return state.products.find(p => p.id === parseInt(id)) || { id: 0, name: 'Produkt nenájdený', price: 0 }
    },
    getProductCount: (state) => state.products.length
  }
})
