<template>
<div class="form">
    <y-form :model="formValidate" :rules="ruleValidate" ref="form">
        <y-form-item label="用户名" prop="name">
            <y-input v-model="formValidate.name"></y-input>
        </y-form-item>
        <y-form-item label="邮箱" prop="email">
            <y-input v-model="formValidate.email"></y-input>
        </y-form-item>
    </y-form>
    <div>
        <button @click="handleSubmit">提交</button>
        <button @click="handleReset">重置</button>
    </div>
</div>
</template>

<script>
import yForm from '../components/form/form.vue';
import yFormItem from '../components/form/formItem.vue';
import yInput from '../components/input/input.vue';

export default {
    components: {
        yForm,
        yFormItem,
        yInput
    },
    data() {
        return {
            formValidate: {
                name: '',
                email: ''
            },
            ruleValidate: {
                name: [
                    {
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur'
                    }
                ],
                email: [
                    {
                        required: true,
                        message: '邮箱不能为空',
                        trigger: 'blur'
                    },
                    {
                        type: 'email',
                        message: '邮箱格式不正确',
                        trigger: 'blur'
                    }
                ],
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$refs.form.validate((error) => {
                if (error) {
                    console.log('表单校验失败');
                } else {
                    console.log('表单验证通过');
                }
            });
        },
        handleReset() {
            this.$refs.form.resetFields();
        }
    }
}
</script>

<style lang="scss" scoped>
</style>

