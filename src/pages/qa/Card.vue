<template>
    <div>
        <van-cell
                @click="$router.push('/qa/answer/' + id)">
            <!--头-->
            <div style="display: flex;justify-content: space-between">
                <span style="color: gray">{{user_name}}</span>
                <span style="color: red" >回复</span>
            </div>
            <!--楼层-->
            <div>
                <small style="color:gray;">{{create_time_text}}</small>
            </div>
            <!--内容-->
            <div>
                <div style="margin: 10px 0">
                    {{desc_text}}
                </div>
            </div>
        </van-cell>
    </div>
</template>

<script>
    export default {
        props: ['id','desc_text','title','create_time_text'],
        name: "QaCard",
        data() {
            return {
            }
        }
    }
</script>

<style scoped>

</style>
