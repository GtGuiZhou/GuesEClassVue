<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                :title="form.title"
                @click-left="$router.back(-1)"
        />
        <van-cell>
            <div>
                <img v-lazy="form.cover_url + '&size=400'" style="width: 100%;height: 200px;">
            </div>
        </van-cell>
        <van-tabs v-model="active">
            <van-tab title="简介">
                <van-cell>
                    <strong>{{form.title}}</strong>
                    <pre>
{{form.desc_text}}
                    </pre>
                </van-cell>
            </van-tab>
            <van-tab title="评论">
                <comment-index :module="'humanwall:' + $route.params.id"></comment-index>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import CommentIndex from "../../components/comment/Index";

    export default {
        name: "HumanwallViewComment",
        components: {CommentIndex},
        data() {
            return {
                active: 0,
                form: {
                    url: '',
                    title: '',
                    desc_text: ''
                }
            }
        },
        created() {
                this.onRead('humanwall', this.$route.params.id, this.form)
        },
        methods: {}
    }
</script>

<style scoped>

</style>
