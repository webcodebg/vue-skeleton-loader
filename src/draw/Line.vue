<template>
    <svg :width="width" :height="height">
        <rect :width="width" :height="height" rx="5" ry="5" style="fill:#efefef" />  
        <rect :height="height" :width="loaderWidth" style="fill:#fbfbfb;transition: width 200ms;"></rect> 
    </svg>
</template>
<script>
export default {
    mounted(){
        let interval = setInterval(function() {
            this.loaderWidth += this.loaderWidth * Math.random()
        }.bind(this), 80);
        setTimeout(() => {
            clearInterval(interval)
        }, 2000);
    },
    data(){
        return {
            loaderWidth: 1
        }
    },
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