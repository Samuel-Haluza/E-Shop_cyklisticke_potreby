<template>
<div>
{{ item.name }} ({{ item.quantity }}) - {{ item.price }} €
<button @click="remove">X</button>
</div>
</template>


<script>
import { useCartStore } from '../stores/cartStore'


export default {
props: { item: Object },
methods: {
remove() {
useCartStore().removeFromCart(this.item.id)
}
}
}
</script>