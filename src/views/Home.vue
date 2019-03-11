<template>
<div class="home">
    <div>Welcome</div>
    <p>--------- Component Area ---------</p>
    <y-button size="large" @on-click="buttonClick($event, 1)">点我</y-button>
    <y-button @click.native="buttonNativeClick">{{ buttonValue }}</y-button>
</div>
</template>

<script>
import yButton from '../components/yButton.vue';

export default {
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