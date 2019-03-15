<template>
<component :is="tagName" v-bind="tagProps" class="dynamic-button">
    <slot></slot>
</component>
</template>

<script>
/* :is还可以绑定一个组件对象，也是常用的用法 */
export default {
    props: {
        to: {
            type: String,
            default: ''
        },
        target: {
            type: String,
            default: '_self'
        }
    },
    computed: {
        tagName() {
            return this.to === '' ? 'button' : 'a';
        },
        tagProps() {
            let props = {};
            if (this.to) {
                props = {
                    href: this.to,
                    target: this.target
                }
            }

            return props;
        }
    }
}
</script>

<style lang="scss" scoped>
.dynamic-button {
    margin-right: 6px
}
</style>
