<template>
    <div>
        <van-cell>
            <strong style="font-size: 1.7em">设置</strong>
        </van-cell>
        <van-cell-group>
            <van-cell title="意见反馈" is-link to="/feedback"></van-cell>
            <van-cell title="关于" is-link to="/about"></van-cell>
        </van-cell-group>
    </div>
</template>

<script>

    export default {
        name: "Setting",
        data() {
            return {

            }
        },
        created(){

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
