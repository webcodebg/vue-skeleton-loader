<template>
    <div class="skeleton">
        <slot></slot>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.skeleton {
    box-shadow: 0px 0px 4px 3px #efefef;
    padding: 10px;
    background-color: white;
}
</style>