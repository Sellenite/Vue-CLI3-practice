<template>
<div class="form">
    <y-form>
        <y-form-item>
            <y-input></y-input>
        </y-form-item>
        <y-form-item>
            <y-input></y-input>
        </y-form-item>
    </y-form>
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
                mail: [
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
    }
}
</script>

<style lang="scss" scoped>
</style>

