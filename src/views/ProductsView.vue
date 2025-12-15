<template>
<div>
<ProductCard v-for="p in products" :key="p.id" :product="p" />
</div>
</template>


<script>
import ProductCard from '../components/ProductCard.vue'


export default {
components: { ProductCard },
data() {
return {
products: [
{ id: 1, name: 'Bicykel', price: 800 },
{ id: 2, name: 'Prilba', price: 60 },
{ id: 3, name: 'Rukavice', price: 25 }
]
}
}
}
</script>
