<template>
    <svg :height="size * 2" :width="size * 2">
        <circle :cx="size" :cy="size" :r="size" fill="#efefef" />
    </svg>
</template>
<script>
export default {
    props: {
        size: {
            required: true
        }
    }
}
</script>