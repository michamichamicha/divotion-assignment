<template>
    <div id="app">
        <header>
            <h2 class="logo"><span class="logo__icon">🌱</span> Love Food B.V.</h2>
            <aside id="side">
                <sidebar></sidebar>
            </aside>
        </header>
        <router-view/>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
    components: { Sidebar },
}
</script>

<style lang="scss">
body {
    overflow-x: hidden;
    margin: 0;
    padding: 110px 0 0 0;
}
header {
    position: fixed;
    top: 0;
    height: 100px;
    width: 100%;
    background-color: #063710;
    z-index: 10;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
}

.logo {
    font-size: 30px;
    text-align: left;
    padding-left: 30px;
    &__icon {
        font-size: 2em;
        vertical-align: middle;
    }
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
#side {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
}
button {
    display: block;
    appearance: none;
    border: 0;
    cursor: pointer;
}
</style>
