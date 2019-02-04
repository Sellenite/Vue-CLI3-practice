// 开箱即用的高度集成Vue-CLI3配置文件

// 用于做相应的合并处理，一般配合webpack-chain插件链式配置时使用，防止参数被覆盖
const merge = require('webpack-merge');

// 终端打印，env变量改变是由于修改.env的形式和npm run执行形式而定义的
console.log(process.env.NODE_ENV);

// 除了env文件，还可以通过本配置文件动态修改，Invalid regular expression
// 记得字符串需要使用JSON.stringify处理，保证是字符串，不然编译的时候会被处理成一个变量
const configs = {
    dev: {
        env: {
            TYPE: JSON.stringify('DEV'),
            IP: JSON.stringify('/')
        }
    },
    build: {
        env: {
            TYPE: JSON.stringify('BUILD'),
            ID: JSON.stringify('yuuhei.site')
        }
    }
};

const cfg = process.env.NODE_ENV === 'production' ? configs.build.env : configs.dev.env;

// 使用webpack的DefinePlugin内置插件进行对客户端代码的变量定义
module.exports = {
    // 配置二级目录publicPath
    publicPath: '/dist/',
    chainWebpack: config => {
        config.plugin('define').tap(args => {
            let name = 'process.env';
            // 使用merge保证原始值不变
            args[0][name] = merge(args[0][name], cfg);
            return args;
        });
    }
}