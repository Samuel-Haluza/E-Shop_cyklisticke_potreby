<template>
<div class="card">
<h3>{{ product.name }}</h3>
<p>{{ product.price }} €</p>
<BaseButton @click="add">Pridať do košíka</BaseButton>
<router-link :to="'/products/' + product.id">Detail</router-link>
</div>
</template>


<script>
import { useCartStore } from '../stores/cartStore'
import BaseButton from './BaseButton.vue'


export default {
props: { product: Object },
components: { BaseButton },
methods: {
add() {
useCartStore().addToCart(this.product)
}
}
}
</script>