// Premades
import VueSocialSkeleton from './src/premades/SkeletonSocial'
import VueArticleSkeleton from './src/premades/SkeletonArticle'

// Drawing
import vsLine from './src/draw/Line'

const lib = {
    install(vue, settings = {}) {
        // TODO: components for drawing
        vue.component('vs-line', vsLine) 


        // Premade components
        vue.component('vue-social-skeleton', VueSocialSkeleton)
        vue.component('vue-article-skeleton', VueArticleSkeleton)
    }
};

export default lib
window.vueSkeletonLoader = lib