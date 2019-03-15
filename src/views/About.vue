<template>
    <div class="about">
        <h1>This is an about page</h1>
        <table-render :columns="columns" :data="data"></table-render>
        <dynamic-button>按钮</dynamic-button>
        <dynamic-button to="https://www.baidu.com">跳转链接</dynamic-button>
        <dynamic-button to="https://www.baidu.com" target="_blank">跳转链接，新窗口</dynamic-button>
    </div>
</template>

<script>
    import tableRender from '../components/table/table-render.vue';
    import dynamicButton from '../components/dynamic-button/dynamic-button.vue';

    export default {
        components: {
            tableRender,
            dynamicButton
        },
        data() {
            return {
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
                ]
            }
        }
    }
</script>
