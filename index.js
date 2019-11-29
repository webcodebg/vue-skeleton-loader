import VueSocialSkeleton from './src/components/SkeletonSocial'
import VueArticleSkeleton from './src/components/SkeletonArticle'

const lib = {
    install(vue, settings = {}) {
        // TODO: components for drawing
        

        // Premade components
        vue.component('vue-social-skeleton', VueSocialSkeleton)
        vue.component('vue-article-skeleton', VueArticleSkeleton)
    }
};

export default lib
window.vueSkeletonLoader = lib