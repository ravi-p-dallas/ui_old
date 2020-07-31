module.exports = {
    transpileDependencies: ['vuetify'],
    pwa: {
        name: 'VantaShala',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',

        // configure the workbox plugin
        workboxPluginMode: 'GenerateSW'

    }
};