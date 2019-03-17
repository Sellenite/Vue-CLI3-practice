<template>
<ul class="tree-ul">
    <li class="tree-li">
        <span class="tree-expand" @click="handleExpand">
            <span v-if="data.children && data.children.length && !data.expand">+</span>
            <span v-if="data.children && data.children.length && data.expand">-</span>
        </span>
        <y-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck">
        </y-checkbox>
    </li>
</ul>
</template>

<script>
import yCheckbox from '../../components/checkbox/checkbox.vue';
export default {
    name: 'TreeNode',
    components: { yCheckbox },
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        showCheckbox: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleExpand() {

        },
        handleCheck() {

        }
    }
}
</script>

<style lang="scss" scoped>
.tree-li,
.tree-ul {
    list-style: none;
    padding-left: 10px;
}
.tree-expand {
    cursor: pointer;
}
</style>
