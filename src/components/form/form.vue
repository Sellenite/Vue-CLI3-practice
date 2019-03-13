<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: 'y-form',
    provide() {
        return {
            form: this
        }
    },
    props: {
        model: {
            type: Object,
            default: {}
        },
        rules: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            fields: []
        }
    },
    created() {
        // vue组件渲染是由内而外的，formItem触发时，form的mounted尚未触发，只能在created阶段监听
        this.$on('on-formItem-mounted', (ctx) => {
            if (ctx) {
                this.fields.push(ctx);
            }
        });
        this.$on('on-formItem-destory', (ctx) => {
            // 数组的indexOf也可以用来判断对象的位置
            this.fields.splice(this.fields.indexOf(ctx), 1);
        });
    },
    methods: {
        resetFields() {
            this.fields.forEach((field) => {
                field.resetField();
            });
        },
        validate(callback) {
            let valid = true;
            let count = 0;
            this.fields.forEach((field) => {
                field.validate('', (error) => {
                    if (error) {
                        valid = false
                    }
                    if (++count === this.fields.length) {
                        if (typeof callback === 'function') {
                            callback(error);
                        }
                    }
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
