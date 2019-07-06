const debug = process.env.NODE_ENV !== 'production';

module.exports = {
    assetPrefix: !debug ? '/reactify-ui' : '',
    webpack: (config) => {
        config.output.publicPath = `/reactify-ui${config.output.publicPath}`;
        return config;
      },
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/components/accordion': { page: '/components/accordion' },
            '/components/alert': { page: '/components/alert' },
            '/components/badge': { page: '/components/badge' },
            '/components/breadcrumbs': { page: '/components/breadcrumbs' },
            '/components/button': { page: '/components/button' },
            '/components/card': { page: '/components/card' },
            '/components/checkbox': { page: '/components/checkbox' },
            '/components/chips': { page: '/components/chips' },
            '/components/context-menu': { page: '/components/context-menu' },
            '/components/dismiss': { page: '/components/dismiss' },
            '/components/dropdown': { page: '/components/dropdown' },
            '/components/file-upload': { page: '/components/file-upload' },
            '/components/full-screen': { page: '/components/full-screen' },
            '/components/group-toggle': { page: '/components/group-toggle' },
            '/components/heirarchy-view': { page: '/components/heirarchy-view' },
            '/components/heat-map': { page: '/components/heat-map' },
            '/components/highlight': { page: '/components/highlight' },
            '/components/horizontal-card': { page: '/components/horizontal-card' },
            '/components/input': { page: '/components/input' },
            '/components/label': { page: '/components/label' },
            '/components/legend': { page: '/components/legend' },
            '/components/link': { page: '/components/link' },
            '/components/list-panel': { page: '/components/list-panel' },
            '/components/login': { page: '/components/login' },
            '/components/modal': { page: '/components/modal' },
            '/components/number-counter': { page: '/components/number-counter' },
            '/components/paginator': { page: '/components/paginator' },
            '/components/paper': { page: '/components/paper' },
            '/components/portal': { page: '/components/portal' },
            '/components/progress-bar': { page: '/components/progress-bar' },
            '/components/radio-input': { page: '/components/radio-input' },
            '/components/radio-group': { page: '/components/radio-group' },
            '/components/search-bar': { page: '/components/search-bar' },
            '/components/select': { page: '/components/select' },
            '/components/sidebar': { page: '/components/sidebar' },
            '/components/slider': { page: '/components/slider' },
            '/components/snackbar': { page: '/components/snackbar' },
            '/components/split-pane': { page: '/components/split-pane' },
            '/components/spinner/balls': { page: '/components/spinner/balls' },
            '/components/spinner/bars': { page: '/components/spinner/bars' },
            '/components/spinner/circle': { page: '/components/spinner/circle' },
            '/components/spinner/clock': { page: '/components/spinner/clock' },
            '/components/spinner/hydrogen': { page: '/components/spinner/hydrogen' },
            '/components/spinner/loadbar': { page: '/components/spinner/loadbar' },
            '/components/spinner/slices': { page: '/components/spinner/slices' },
            '/components/spinner/sphere': { page: '/components/spinner/sphere' },
            '/components/spinner/texture': { page: '/components/spinner/texture' },
            '/components/spinner/volume': { page: '/components/spinner/volume' },
            '/components/spinner/vortex': { page: '/components/spinner/vortex' },
            '/components/spinner/wave': { page: '/components/spinner/wave' },
            '/components/stacked-card': { page: '/components/stacked-card' },
            '/components/star-rating': { page: '/components/star-rating' },
            '/components/switch': { page: '/components/switch' },
            '/components/tabs': { page: '/components/tabs' },
            '/components/text': { page: '/components/text' },
            '/components/timer': { page: '/components/timer' },
            '/components/toast': { page: '/components/toast' },
            '/components/tooltip': { page: '/components/tooltip' },
            '/components/top-bar': { page: '/components/top-bar' },
            '/components/tree-view': { page: '/components/tree-view' },
            '/components/typeahead': { page: '/components/typeahead' },
            '/components/user-profile': { page: '/components/user-profile' },
        };
    }
}