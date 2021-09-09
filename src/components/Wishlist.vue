<template>
    <div class="wishlist">
        <h2 class="wishlist__title">Wishlist</h2>
        <ul class="wishlist__products" v-if="wishlistEntries.length">
            <wishlist-product
                v-for="{ product, quantity } in wishlistEntries"
                :key="product.id"
                :product="product"
                :quantity="quantity"
            ></wishlist-product>
        </ul>
        <p v-else class="wishlist__subtext">No items in wishlist</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import WishlistProduct from '@/components/WishlistProduct'

export default {
    name: 'Wishlist',
    components: { WishlistProduct },
    computed: {
        ...mapState('products', ['wishlist']),
        wishlistEntries () {
            return Object.entries(this.wishlist).map(([productId, quantity]) => {
                return {
                    product: this.$store.getters['products/getProductById'](Number(productId)),
                    quantity,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.wishlist {
    &__title {
        color: black;
    }
    &__products {
        padding: 0;
    }
    &__subtext {
        color: black;
    }
}
</style>
