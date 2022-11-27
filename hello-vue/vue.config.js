const {defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: 'http://127.0.0.1:3000'
    }
})

//what we're doing is telling our vue developer server that if any API requests are made by the vue client,
//they need to be sent to the above address. The variable names have to be exact.

//proxy: 'http://127.0.0.1:3000' is the web address of your vue developer server
//proxy = to send messages using the vue developer server and send them on to your express server.