<template>
<input type="text" :value="currentValue" @input="handleInput" @blur="handleBlur" />
</template>

<script>
import Emitter from '../../mixins/emitter.js';
export default {
    name: 'y-input',
    mixins: [Emitter],
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        }
    },
    methods: {
        handleInput(e) {
            let value = e.target.value;
            this.$emit('input', value);
            this.dispatch('y-formItem', 'on-form-change', value);
        },
        handleBlur() {
            this.dispatch('y-formItem', 'on-form-blur', this.currentValue);
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
