<template>
    <div>
        <van-cell     :to="'/lovewall/view_comment/' + id">
            <!--头-->
            <div style="display: flex;justify-content: space-between">
                <span style="color: gray">{{user_name}}</span>
                <span style="color: red" >查看</span>
            </div>
            <!--楼层-->
            <div>
                <small style="color:gray;">{{create_time_text}}</small>
            </div>
            <!--内容-->
            <div>
                <div style="margin: 10px 0">
                    {{content}}
                </div>

                <img v-lazy="image_url + '&size=400'" style="height: 200px">
            </div>
        </van-cell>


        <!--评论内容-->
        <van-cell>
            <van-cell
                    :value="comment_number"
                    :to="'/lovewall/view_comment/' + id"
                    title="查看评论" is-link ></van-cell>
        </van-cell>
    </div>
</template>

<script>
    export default {
        props: ['id','user_name' ,'content','create_time_text','comment_number','image_url'],
        name: "LoveCard",
        data() {
            return {
                items: [],
                form: {}
            }
        },
    }
</script>

<style scoped>

</style>
