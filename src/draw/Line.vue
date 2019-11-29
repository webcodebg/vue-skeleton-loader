<template>
    <svg :width="width" :height="height">
        <rect :width="width" :height="height" rx="5" ry="5" style="fill:#efefef" />  
    </svg>
</template>
<script>
export default {
    props: {
        height: {
            required: true
        },
        width: {
            required: true
        }
    }
}
</script>