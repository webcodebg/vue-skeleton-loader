<template>
    <skeleton class="skeleton">
        <vs-circle size="50"></vs-circle>
    </skeleton>
</template>    
<script>
import vsCircle from './../draw/Circle'
import skeleton from './../draw/Skeleton'

export default {
    components: {
        vsCircle, skeleton
    }
}
</script>