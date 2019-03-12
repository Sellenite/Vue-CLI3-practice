<template>
<div class="y-formItem">
    <label v-if="label">{{ label }}</label>
    <div>
        <slot></slot>
    </div>
</div>
</template>

<script>
import Emitter from '../../mixins/emitter.js';
import AsyncValidator from 'async-validator';
export default {
    name: 'y-formItem',
    mixins: [Emitter],
    inject: ['form'],
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    },
    data() {
        return {
            validateState: '', // 校验状态
            validateMessage: '', // 校验不通过提示的信息
        }
    },
    computed: {
        fieldValue() {
            return this.form.model[this.prop];
        }
    },
    // 渲染组件时，将实例缓存在form里
    mounted() {
        if (this.prop) {
            this.dispatch('y-form', 'on-formItem-mounted', this);
            this.setRules();
        }
    },
    // 销毁组件时，将实例从form的缓存里删去
    beforeDestory() {
        if (this.prop) {
            this.dispatch('y-form', 'on-formItem-destory', this);
        }
    },
    methods: {
        getRules() {
            let formRules = this.form.rules;
            formRules = formRules ? formRules[this.prop] : [];
            return formRules.slice();
        },
        setRules() {
            this.$on('on-form-change', this.onFieldChange);
            this.$on('on-form-blur', this.onFieldBlur);
        },
        // 只支持blur和change的校验，筛选出来
        getFilteredRule(trigger) {
            let rules = this.getRules();
            return rules.filter(rule => {
                // 假如rule未指定trigger，就算全部动作都要检查
                return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
            });
        },
        /**
         * 校验函数
         * @param  {String}   trigger  校验类型
         * @param  {Function} callback 回调函数
         */
        validate(trigger, callback = function() {}) {
            let rules = this.getFilteredRule(trigger);
            if (!rules || rules.length === 0) {
                return
            }
            this.validateState = 'validating';
            /* 第三方插件调用方法 */
            let descriptor = {};
            descriptor[this.prop] = rules;
            let model = {};
            model[this.prop] = this.fieldValue;

            let validator = new AsyncValidator(descriptor);
            validator.validate(model, {firstFields: true}, errors => {
                this.validateState = !errors ? 'success' : 'error';
                this.validateMessage = errors ? errors[0].message : '';

                callback(this.validateMessage);
            });
        },
        onFieldChange() {
            this.validate('change');
        },
        onFieldBlur() {
            this.validate('blur');
        }
    }
}
</script>

<style lang="scss" scoped>
.y-formItem {
    margin-bottom: 10px;
}
</style>
