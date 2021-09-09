<template>
    <div class="products-overview">
        <product-list></product-list>
    </div>
</template>

<script>
import ProductList from '@/components/ProductList'

export default {
    name: 'ProductsOverview',
    components: { ProductList },
}
</script>
