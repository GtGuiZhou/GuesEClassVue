<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="视频播放"
                @click-left="$router.back(-1)"
        />
        <div v-loading="crudLoading">
            <div >
                <video
                        controls="controls"
                        style="height: 200px;width: 100%"
                        :src="form.url">
                    您的浏览器不支持 video 标签。
                </video>
            </div>
            <van-tabs v-model="active">
                <van-tab title="简介">
                    <van-cell>
                        <strong>{{form.title}}</strong>
                        <br>
                        <van-tag
                                color="rgba(144,147,153,.2)"
                                v-for="(tag,index) in form.tags" :key="index"
                        >
                            <span style="color: #909399">{{tag}}</span>
                        </van-tag>
                        <br>
                            {{form.desc_text}}
                    </van-cell>
                </van-tab>
                <van-tab title="评论">
                    <comment-index :module="module"></comment-index>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import crud from '@/components/mixins/crud'
    import CommentIndex from "../../components/comment/Index";
    export default {
        name: "VideoPlay",
        components: {CommentIndex},
        mixins: [crud],
        data() {
            return {
                active: 0,
                form: {
                    url: '',
                    title: '',
                    desc_text: '',
                    tags: []
                }
            }
        },
        computed : {
            module () {
                return 'video:'+this.$route.params.id
            }
        },
        created () {
            this.onRead('video',this.$route.params.id,this.form)
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
