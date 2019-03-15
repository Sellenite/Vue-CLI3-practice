import Alert from './instance.js';

let messageInstance;

function getMessageInstance() {
    messageInstance = messageInstance || new Alert.newInstance();
    return messageInstance;
}

function notice({ duration = 1.5, content = '' }) {
    let instance = getMessageInstance();

    instance.add({
        duration,
        content
    })
}

export default {
    info(options) {
        notice(options);
    }
}