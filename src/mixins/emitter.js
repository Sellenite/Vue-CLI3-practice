/**
 * Vue1.x
 * $dispatch用于向上级派发事件，只要是它的父级（一级或多级以上），都可以在组件内通过$on监听到
 * $broadcast用于向下级广播时间，同样使用$on监听到
 * 由于Vue2.x已经废弃这两个方法，使用$emit和$on替代，使用递归遍历方式可以模拟达到功能
 * 根本原理是使用$emit可以在本组件使用$on监听到
 */

export default {
    methods: {
        // 需要指定谁接受这个信息
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;
            // 循环往上遍历
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            // 找到后触发emit，然后使用on就可监听到
            if (parent) {
                parent.$emit.apply(parent, [eventName, params]);
            }
        },
        // 具名函数，子组件递归遍历查询使用
        broadcast: function broadcast(componentName, eventName, params) {
            this.$children.forEach((child) => {
                let name = child.$options.name;
                if (name === componentName) {
                    child.$emit.apply(child, [eventName, params]);
                } else {
                    broadcast.apply(child, [componentName, eventName, params]);
                }
            });
        }
    }
}