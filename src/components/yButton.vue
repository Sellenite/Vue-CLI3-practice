<template>
<button class="y-button" :class="'size-' + size" :disabled="disabled" @click="handleClick">
    <slot></slot>
</button>
</template>

<script>
/* 验证传入的属性，不符合的话会阻止 */
const oneOf = (value, validList) => {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

export default {
    props: {
        size: {
            validator(value) {
                return oneOf(value, ['large', 'small', 'default']);
            },
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick() {
            this.$emit('on-click', 'y-button');
        }
    }
}
</script>

<style lang="scss" scoped>
.y-button {
    margin-right: 6px;
    &.size-default {
        font-size: 13px;
    }
    &.size-large {
        font-size: 20px;
    }
}
</style>
