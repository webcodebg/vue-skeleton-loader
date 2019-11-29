<template>
    <div>
        <div style="margin-bottom: 30px">
            <vs-line width="400" height="30"></vs-line>
        </div>
        <div class="vsa-content">
            <div class="flex-1">
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
                <vs-line width="400" height="10"></vs-line>
            </div>
            <div class="flex-1">
                <vs-line width="400" height="240"></vs-line>
                <vs-line width="400" height="240" style="margin-top: 10px"></vs-line>
            </div>
        </div>
    </div>
</template>
<script>
import vsLine from './../draw/Line'

export default {
    components: {
        vsLine
    }
}
</script>

<style lang="css">
.vsa-content {
    display: flex;
}
.flex-1 {
    flex-basis: 50%;
    margin: 10px;
}
</style>