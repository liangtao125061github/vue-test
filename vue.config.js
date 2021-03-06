'use strict';

module.exports = {
    // 基本路径
    publicPath: './',
    // 输出文件目录
    outputDir: 'dist',
    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/form/': {
                target: 'www.baidu.com',
                changeOrigin: true,
                ws: false
            },
            '/': {
                target: 'http://81.70.29.145:3000/mock/29',
                changeOrigin: true,
                ws: false
            },
        }
    }
}
