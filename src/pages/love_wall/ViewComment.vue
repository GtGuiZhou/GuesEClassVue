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
            <div v-html="item.template">

            </div>
        </van-cell>
        <!--评论-->
        <comment-index :module="'lovawall:' + $route.params.id"></comment-index>
    </div>
</template>

<script>
    import crud from '@/components/mixins/crud'
    import CommentIndex from "../../components/comment/Index";

    export default {
        name: "ViewComment",
        components: {CommentIndex},
        mixins: [crud],
        data() {
            return {
                items: [],
                item: {
                    content: '',
                    image_url: '',
                    from_email: '',
                    to_email: ''
                }
            }
        },
        created() {
            if ('id' in this.$route.params) {
                this.onRead('lovewall', this.$route.params.id, this.item)
            }
            this.onLoadAll('comment', this.items, 'lovewall:' + this.$route.params.id)
        },
        methods: {}
    }
</script>

<style scoped>

</style>
