<template>
    <div style="text-align: center">
        <van-icon :name="icon"></van-icon>
        <div><slot></slot></div>
    </div>
</template>

<script>
    export default {
        props: ['icon','title'],
        name: "MenuItem"
    }
</script>

<style scoped>

</style>
