<template>
<div>
    <tree-node v-for="(item, index) in cloneData" :key="index" :data="item"
               :show-checkbox="showCheckbox">
    </tree-node>
</div>
</template>

<script>
import TreeNode from "./node.vue";
import { deepCopy } from "../../utils/assist.js";
export default {
    name: "y-tree",
    props: {
        data: {
            type: Array,
            default: () => []
        },
        showCheckbox: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            cloneData: []
        };
    },
    watch: {
        data() {
            this.rebuildData();
        }
    },
    methods: {
        rebuildData() {
            this.cloneData = deepCopy(this.data)
        }
    }
};
</script>

<style lang="scss" scoped></style>
