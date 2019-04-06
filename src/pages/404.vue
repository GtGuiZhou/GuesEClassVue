<template>
    <div style="text-align: center">
        <h1 style="color: darkcyan">404 未找到页面！</h1>
        <span style="color: gray;text-decoration: underline" @click="$router.back()">返回上一页</span>
    </div>
</template>

<script>
    export default {
        name: "404"
    }
</script>

<style scoped>

</style>
