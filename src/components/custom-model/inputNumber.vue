<template>
<div>
    <button @click="increase(-1)">减 1</button>
    <span style="color: red;padding: 6px">{{ currentValue }}</span>
    <button @click="increase(1)">加 1</button>
</div>
</template>
<script>
import Bus from '../../utils/eventBus.js';
export default {
    name: 'InputNumber',
    props: {
        number: {
            type: Number
        }
    },
    model: {
        prop: 'number',
        event: 'change'
    },
    data() {
        return {
            currentValue: this.number
        }
    },
    watch: {
        number(val) {
            this.currentValue = val;
        }
    },
    methods: {
        increase(val) {
            this.currentValue += val;
            this.$emit('change', this.currentValue);
            Bus.$emit('eventBus', 'eventBus');
        }
    }
}
</script>
