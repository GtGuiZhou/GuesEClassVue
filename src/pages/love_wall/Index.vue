<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                right-text="添加"
                title="表白墙"
                @click-left="$router.back(-1)"
                @click-right="$router.push('/lovewall/add')"
        />
    </div>
</template>

<script>
    export default {
        name: "LoveWall",
        data() {
            return {
                form: {
                    content: '',
                    image_url: '',
                    from_email: '',
                    to_email: ''
                }
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
