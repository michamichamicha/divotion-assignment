import { mapActions } from 'vuex'

export default {
    props: {
        tag: {
            default: 'li',
            type: String,
        },
        product: {
            required: true,
            type: Object,
        },
    },
    computed: {
        backgroundImageStyle () {
            return `background-image: url(${this.backgroundImageUrl});`
        },
        backgroundImageUrl () {
            return `/img/products/${this.product.filename}`
        },
        isProductWishlisted () {
            return this.$store.getters['products/isProductWishlisted'](this.product.id)
        },
    },
    methods: {
        ...mapActions('products', ['updateProductOnWishlist']),
        addProductToWishlist () {
            this.updateProductOnWishlist({
                product: this.product,
                quantity: 1,
            })
        },
    },
}
