<template>
    <component :is="tag" class="wishlist-product">
        <button class="wishlist-product__remove" @click="removeFromWishlist" title="Remove from wishlist">&times;</button>
        <h2 class="wishlist-product__title">
            <label :for="`wishlist-entry_${product.id}`">{{ product.title }}</label>
        </h2>
        <div class="wishlist-product__image"
             :style="backgroundImageStyle"></div>
        <div class="wishlist-product__details">
            <form @submit.prevent="setQuantity">
                <input
                    :id="`wishlist-entry_${product.id}`"
                    class="wishlist-product__input"
                    type="number"
                    v-model.number="localQuantity"
                    @keydown.enter="setQuantity"
                    ref="inputField"
                    min="0"
                    title="Change quantity"
                >
                <transition name="bounce">
                    <button
                        v-if="isDirty"
                        class="wishlist-product__save"
                        type="submit"
                        title="Save"
                        @click="setQuantity"
                    >✓️</button>
                </transition>
            </form>
        </div>
    </component>
</template>

<script>
import ProductCommon from '@/components/ProductCommon'
import { mapActions } from 'vuex'

export default {
    name: 'WishlistProduct',
    mixins: [ProductCommon],
    props: {
        quantity: Number,
    },
    data () {
        return {
            localQuantity: null,
        }
    },
    computed: {
        isDirty () {
            return this.localQuantity !== this.quantity
        },
    },
    methods: {
        ...mapActions('products', ['updateProductOnWishlist']),
        setQuantity () {
            this.updateProductOnWishlist({
                product: this.product,
                quantity: this.localQuantity,
            })
            this.$refs.inputField.blur()
        },
        removeFromWishlist () {
            this.updateProductOnWishlist({
                product: this.product,
                quantity: 0,
            })
        },
    },
    created () {
        this.localQuantity = this.quantity
    },
}

</script>

<style lang="scss">
$productPadding: 10px;
.wishlist-product {
    display: flex;
    background-color: #0c5f1e;
    color: white;
    box-shadow: 4px 4px 7px 3px rgba(0, 0, 0, 0.2);
    padding-right: 0;
    position: relative;
    align-items: center;

    &__title {
        order: 20;
        font-size: 14px;
    }

    &__image {
        order: 1;
        width: 40px;
        height: 40px;
        margin-right: 10px;
        background-position: center;
        background-size: cover;
    }

    &__details {
        order: 40;
        margin-left: auto;
        padding-right: 5px;
        display: flex;
    }

    &__save {
        color: white;
        background-color: transparent;
        font-size: 24px;
        position: absolute;
        right: 0;
        top: 3px;
    }

    &__remove {
        color: white;
        font-size: 18px;
        background-color: transparent;
    }

    &__quantity {
        border: 1px solid white;
        padding: 4px;
    }

    &__input {
        max-width: 38px;
        font-size: 16px;
        background-color: #f5fff0;
        color: #000000;
        border: 1px solid white;
        padding-right: 5px;
        margin-right: 40px;
        border-radius: 3px;

        &:focus {
            padding-top: 8px;
            padding-bottom: 8px;
        }
    }
}

.bounce-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>
