<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="评论"
                @click-left="$router.back(-1)"
        />
        <!--表白卡片-->
        <van-cell v-loading="crudLoading">
            <!--头-->
            <div style="display: flex;justify-content: space-between">
                <span style="color: gray">{{item.user_name}}</span>
            </div>
            <!--楼层-->
            <div>
                <small style="color:gray;">{{item.create_time_text}}</small>
            </div>
            <!--内容-->
            <div v-if="item.template" v-html="item.template">
            </div>
            <div v-else>
                <div style="margin: 10px 0">
                    {{item.content}}
                </div>

                <img v-lazy="item.image_url + '&size=400'" style="height: 200px">
            </div>
        </van-cell>
        <!--评论-->
        <comment-index :module="'lovewall:' + $route.params.id"></comment-index>
    </div>
</template>

<script>
    import CommentIndex from "../../components/comment/Index";

    export default {
        name: "ViewComment",
        components: {CommentIndex},
        data() {
            return {
                item: {
                    content: '',
                    image_url: '',
                    from_email: '',
                    to_email: ''
                }
            }
        },
        created() {
                this.onRead('lovewall', this.$route.params.id, this.item)
        },
        methods: {}
    }
</script>

<style scoped>

</style>
