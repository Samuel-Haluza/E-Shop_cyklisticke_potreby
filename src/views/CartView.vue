<template>
<div>
<CartItem v-for="i in cart.items" :key="i.id" :item="i" />
<p>Spolu: {{ cart.totalPrice }} €</p>
</div>
</template>


<script>
import { useCartStore } from '../stores/cartStore'
import CartItem from '../components/CartItem.vue'


export default {
components: { CartItem },
computed: {
cart() {
return useCartStore()
}
}
}
</script>