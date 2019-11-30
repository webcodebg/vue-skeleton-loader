<template>
    <skeleton>
        <div class="vs_article-title">
            <vs-line width="95%" height="25"></vs-line>
            <vs-line width="80%" height="25"></vs-line>
        </div>
        <div class="vsa-content">
            <div class="flex-1">
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
                <vs-line width="100%" height="10"></vs-line>
            </div>
            <div class="flex-1">
                <vs-line width="100%" height="240"></vs-line>
                <vs-line width="100%" height="240" style="margin-top: 10px"></vs-line>
            </div>
        </div>
        <div>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
            <vs-line width="100%" height="10"></vs-line>
        </div>
    </skeleton>
</template>
<script>
import vsLine from './../draw/Line'
import skeleton from './../draw/Skeleton'

export default {
    components: {
        vsLine, skeleton
    }
}
</script>

<style lang="css">
.vs_article-title {
    margin-left: 10px;
    margin-bottom: 15px;
}
.vsa-content {
    display: flex;
}
.flex-1 {
    flex-basis: 50%;
    margin: 10px;
}
</style>