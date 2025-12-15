<template>
<div>
<h2>Detail produktu {{ id }}</h2>
</div>
</template>


<script>
export default {
computed: {
id() {
return this.$route.params.id
}
}
}
</script>