<template>
<div class="home">
    <div>Welcome</div>
    <p>--------- Component Area ---------</p>
    <y-button size="large" @on-click="buttonClick($event, 1)">点我</y-button>
    <y-button @click.native="buttonNativeClick">{{ buttonValue }}</y-button>
</div>
</template>

<script>
import yButton from '../components/button/button.vue';
import Emitter from '../mixins/emitter.js';

export default {
    name: 'page-Home',
    mixins: [Emitter],
    provide() {
        return {
            Home: this
        }
    },
    data() {
        return {
            buttonValue: 1
        }
    },
    created() {
        /**
         * 来自button组件的dispatch，原理其实是子组件找到该父组件，然后在该组件写入执行$emit，
         * 因为在同一个组件里使用$emit是可以使用$on监听到到，原理就是如此
         */
        this.$on('dispatch-event', (text) => {
            console.log(text);
        });
    },
    components: {
        yButton
    },
    methods: {
        buttonClick(val, payload) {
            console.log(val, payload);
        },
        buttonNativeClick() {
            console.log('native click');
        },
        updateButtonValue() {
            this.buttonValue = '点我native click';
        }
    }
}
</script>