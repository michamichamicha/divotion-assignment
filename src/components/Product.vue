<template>
    <component :is="tag" class="product">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="product__image"
             :style="backgroundImageStyle">
            <img
                :src="backgroundImageUrl"
                class="product__image-element"
                :alt="product.description">
        </div>
        <div class="product__actions">
            <button
                class="product__action"
                :class="{'product__action--is-wished': isProductWishlisted}"
                title="Add to wishlist"
                @click="addProductToWishlist"
            >❤️
            </button>
        </div>
    </component>
</template>

<script>
import ProductCommon from '@/components/ProductCommon'

export default {
    name: 'Product',
    mixins: [ProductCommon],
}

</script>

<style lang="scss">
$productPadding: 10px;
.product {
    display: flex;
    flex-direction: column;
    background-color: #0c5f1e;
    color: white;
    box-shadow: 4px 4px 7px 3px rgba(0, 0, 0, 0.2);
    padding: 0 $productPadding;
    position: relative;

    &__image {
        margin-left: $productPadding * -1;
        margin-right: $productPadding * -1;
        margin-top: auto;
        height: 400px;
        background-position: center;
        background-size: cover;
        position: relative;
        overflow: hidden;
    }

    &__image-element {
        opacity: 0;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    &__actions {
        position: absolute;
        bottom: 5px;
        right: 5px;
    }

    &__action {
        background-color: transparent;
        font-size: 24px;
        text-shadow: 0 0 7px white;
        transition: all 200ms ease-out;
        transform: scale(0);
        &--is-wished {
            opacity: 0.9;
            transform: scale(0.9) !important;
            text-shadow: none;
            cursor: default;
        }
    }

    &:hover {
        .product__action {
            transform: scale(1);

            &:hover {
                transform: scale(1.5);
            }
        }
    }
}
</style>
