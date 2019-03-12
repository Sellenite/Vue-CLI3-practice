<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/form">Form</router-link>
        </div>
        <p @click="testBroadcast">点我往下子组件广播时间</p>
        <router-view />
    </div>
</template>

<script>
    import Emitter from './mixins/emitter.js';
    export default {
        mixins: [Emitter],
        methods: {
            testBroadcast() {
                this.broadcast('y-button', 'broadcast-event', 'broadcast-payload');
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
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
</style>
