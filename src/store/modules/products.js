import axios from 'axios'

export const SET_PRODUCTS = 'SET_PRODUCTS'
export const UPDATE_ITEM_ON_WISHLIST = 'UPDATE_ITEM_ON_WISHLIST'
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST'

export default {
    namespaced: true,

    state: {
        products: [],
        wishlist: {},
    },

    mutations: {
        [SET_PRODUCTS] (state, productList) {
            this._vm.$set(state, 'products', productList)
        },
        [UPDATE_ITEM_ON_WISHLIST] (state, { product, quantity }) {
            this._vm.$set(state.wishlist, product.id, quantity)
        },
        [REMOVE_FROM_WISHLIST] (state, product) {
            this._vm.$delete(state.wishlist, product.id)
        },
    },

    actions: {
        fetchProducts ({ commit }) {
            return new Promise((resolve, reject) => {
                axios.get('/products.json').then(({ data }) => {
                    commit(SET_PRODUCTS, data)
                    resolve(data)
                }).catch((err) => {
                    console.error(err)
                    reject(err)
                })
            })
        },
        updateProductOnWishlist ({ commit, state }, { product, quantity }) {
            if (quantity === 0) {
                commit(REMOVE_FROM_WISHLIST, product)
                return
            }
            commit(UPDATE_ITEM_ON_WISHLIST, { product, quantity })
        },
    },
    getters: {
        getProductById (state) {
            return (productId) => {
                return state.products.find(({ id }) => id === productId)
            }
        },
        getNumberOfWishlistItems (state) {
            return Object.keys(state.wishlist).length
        },
        isProductWishlisted (state) {
            return (productId) => {
                return Boolean(state.wishlist[productId])
            }
        },
    },
}
