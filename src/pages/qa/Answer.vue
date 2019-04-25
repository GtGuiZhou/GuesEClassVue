<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="回复问题"
                @click-left="$router.back(-1)"
        ></van-nav-bar>

        <van-cell
                v-loading="crudLoading"
                >
            <!--头-->
            <div style="display: flex;justify-content: space-between">
                <span style="color: gray">{{form.user_name}}</span>
            </div>
            <!--楼层-->
            <div>
                <small style="color:gray;">{{form.create_time_text}}</small>
            </div>
            <!--内容-->
            <div>
                <div style="margin: 10px 0">
                    {{form.content}}
                </div>
            </div>
        </van-cell>
        <comment-index :module="'qa:' + $route.params.id"></comment-index>
    </div>
</template>

<script>
    import CommentIndex from "../../components/comment/Index";
    const module = 'qa'
    export default {
        name: "QaAnswer",
        components: {CommentIndex},
        data() {
            return {
                form: {
                    content: '',
                    user_name: '',
                    create_time_text: ''
                }
            }
        },
        created() {
            this.onRead(module,this.$route.params.id,this.form)
        },
        methods: {
            submit() {

            }
        }
    }
</script>

<style scoped>

</style>
