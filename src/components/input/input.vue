<template>
    <input type="text" :value="currentValue" />
</template>

<script>
export default {
    name: 'y-input',
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
    }
}
</script>

<style lang="scss" scoped>
</style>
