<template>
    <ul class="product-list">
        <product
            v-for="(product, index) in products"
            :key="index"
            class="product-list__item"
            :product="product"
        >
        </product>
    </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Product from '@/components/Product'

export default {
    name: 'ProductList',
    components: { Product },
    computed: {
        ...mapState('products', ['products']),
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
    },
    created () {
        this.fetchProducts()
    },
}
</script>

<style lang="scss" scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        padding: 0;
        &__item {
            flex: 1 1 21%;
            text-align: center;
            max-width: 400px;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
        }
    }
</style>
