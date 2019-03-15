import Vue from 'vue';
import Alert from './alert.vue';

Alert.newInstance = (props = {}) => {
    const Instance = new Vue({
        data: props,
        render(h) {
            return h(Alert, {
                props
            })
        }
    });

    console.log(Instance)

    const component = Instance.$mount();
    document.body.appendChild(component.$el);

    const children = Instance.$children[0];

    return {
        add(noticeProps) {
            children.add(noticeProps);
        },
        remove(name) {
            children.remove(name);
        }
    }
}

export default Alert;