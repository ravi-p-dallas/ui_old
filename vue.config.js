module.exports = {
    transpileDependencies: ['vuetify', 'vuex-module-decorators', 'vue-clamp', 'resize-detector'],
    pwa: {
        name: 'VantaShala',
        themeColor: '#fff3e0',
        msTileColor: '#fff3e0',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#fff3e0',
        workboxPluginMode: 'GenerateSW',
    },
};