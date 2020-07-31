module.exports = {
    transpileDependencies: ['vuetify'],
    pwa: {
        name: 'VantaShala',
        themeColor: '#4DBA87',
        msTileColor: '#fb8c00',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW'

    }
};