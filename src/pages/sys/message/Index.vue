<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="系统消息列表"
                @click-left="$router.back(-1)"
        />
        <van-cell v-for="(item,index) in items" :key="index">
            <div>
                <span style="color: gray">{{item.create_time_text}}</span>
            </div>
            <div style="margin: 10px 0">
                {{item.content}}
            </div>
        </van-cell>
    </div>
</template>

<script>
    export default {
        name: "SysMessage",
        data() {
            return {
                items: []
            }
        },
        created() {
            this.onLoad('message').then(
                res => {
                    this.items = res
                }
            )
        },
        methods: {
            submit() {

            }
        }
    }
</script>

<style scoped>

</style>
