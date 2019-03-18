<template>
<div class="about">
    <h1>This is an about page</h1>
    <table-render :columns="columns" :data="data"></table-render>
    <dynamic-button>按钮</dynamic-button>
    <dynamic-button to="https://www.baidu.com">跳转链接</dynamic-button>
    <dynamic-button to="https://www.baidu.com" target="_blank">跳转链接，新窗口</dynamic-button>
    <tree :data="tree" :showCheckbox="true"></tree>
    <div>
        <input-number v-model="inputNumberVal" />
        {{ inputNumberVal }}
    </div>
    <div>
        <sync-number :number.sync="syncNumberVal" />
        {{ syncNumberVal }}
    </div>
</div>
</template>

<script>
import tableRender from '../components/table/table-render.vue';
import dynamicButton from '../components/dynamic-button/dynamic-button.vue';
import inputNumber from '../components/custom-model/inputNumber.vue';
import syncNumber from '../components/custom-model/syncNumber.vue';
import tree from '../components/tree/tree.vue';

export default {
    components: {
        tableRender,
        dynamicButton,
        inputNumber,
        syncNumber,
        tree
    },
    data() {
        return {
            inputNumberVal: 0,
            syncNumberVal: 0,
            columns: [
                {
                    title: '姓名',
                    key: 'name'
                    },
                {
                    title: '年龄',
                    key: 'age'
                    },
                {
                    title: '操作'
                    }
                ],
            data: [
                {
                    name: 'asd',
                    age: '10'
                    },
                {
                    name: 'qwe',
                    age: '20'
                    }
                ],
            tree: [
                {
                    title: 'parent 1',
                    expand: true,
                    children: [
                        {
                            title: 'parnet 1-1',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-1-1'
                                    },
                                {
                                    title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                        {
                            title: 'parnet 1-2',
                            expand: true,
                            children: [
                                {
                                    title: 'leaf 1-2-1'
                                    },
                                {
                                    title: 'leaf 1-2-2'
                                    }
                                ]
                            }
                        ]
                    }
                ]
        }
    }
}
</script>
