<template>
    <div class="about">
        <h1>This is an about page</h1>
        <table-render :columns="columns" :data="data"></table-render>
    </div>
</template>

<script>
    import tableRender from '../components/table/table-render.vue';

    export default {
        components: {
            tableRender
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
