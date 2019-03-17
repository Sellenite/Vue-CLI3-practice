<template>
<ul class="tree-ul">
    <li class="tree-li">
        <span class="tree-expand" @click="handleExpand">
            <span v-if="data.children && data.children.length && !data.expand">+</span>
            <span v-if="data.children && data.children.length && data.expand">-</span>
        </span>
        <y-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck">
        </y-checkbox>
        <span>{{ data.title }}</span>
        <!-- 组件的递归开始 -->
        <tree-node v-if="data.expand" v-for="(item, index) in data.children" :key="index"
                   :data="item" :show-checkbox="showCheckbox"></tree-node>
    </li>
</ul>
</template>

<script>
import { findComponentUpward } from '../../utils/assist.js';
import yCheckbox from '../../components/checkbox/checkbox.vue';
export default {
    name: 'treeNode',
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
    data() {
        return {
            tree: findComponentUpward(this, 'y-tree')
        }
    },
    watch: {
        'data.children': {
            handler(data) {
                if (data) {
                    const checkAll = data.every((item) => {
                        return item.checked;
                    });
                    this.$set(this.data, 'checked', checkAll);
                }
            },
            deep: true
        }
    },
    methods: {
        handleExpand() {
            this.$set(this.data, 'expand', !this.data.expand);
            if (this.tree) {
                this.tree.emitEvent('on-toggle-expand', this.data);
            }
        },
        handleCheck(checked) {
            this.updateTreeDown(this.data, checked);
        },
        updateTreeDown(data, checked) {
            this.$set(data, 'checked', checked);
            if (data.children && data.children.length) {
                data.children.forEach((item) => {
                    // 递归赋值
                    this.updateTreeDown(item, checked);
                });
            }
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
