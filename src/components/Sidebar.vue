<template>
    <section class="sidebar">
        <button class="sidebar__toggle" @click="toggleSidebar">
            {{ isSidebarActive ? '&times;' : getNumberOfWishlistItems }}
        </button>
        <transition name="slide">
            <div class="sidebar__content" v-if="isSidebarActive">
                <wishlist></wishlist>
            </div>
        </transition>
    </section>
</template>
<script>
import Wishlist from '@/components/Wishlist'
import { mapGetters } from 'vuex'
export default {
    name: 'Sidebar',
    components: { Wishlist },
    computed: {
        ...mapGetters('products', ['getNumberOfWishlistItems']),
    },
    data () {
        return {
            isSidebarActive: false,
        }
    },
    methods: {
        toggleSidebar () {
            this.isSidebarActive = !this.isSidebarActive
        },
    },
}
</script>
<style lang="scss" scoped>
.sidebar {
    position: relative;
    height: 100%;
    &__toggle {
        font-family: monospace;
        position: absolute;
        right: 5px;
        top: 5px;
        background-color: #063710;
        box-shadow: 0 0 4px 6px rgba(255, 255, 255, 0.3);
        font-size: 24px;
        width: 40px;
        height: 40px;
        display: block;
        place-items: center;
        color: white;
        border-radius: 100% 0 100% 100%;
        z-index: 10;
    }
    &__content {
        height: 100%;
        padding-top: 1px;
        padding-left: 10px;
        padding-right: 10px;
        width: 400px;
        box-shadow: 2px 2px 4px 6px rgba(0, 0, 0, 0.3);
        background-color: #f5fff0;
    }
}

.slide-leave-active,
.slide-enter-active {
    transition: 1s;
}
.slide-enter {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(100%, 0);
}

</style>
