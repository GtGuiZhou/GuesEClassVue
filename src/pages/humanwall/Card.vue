<template>
    <div>
        <van-cell
                @click="$router.push('/humanwall/viewcomment/' + id)"
                >
            <div>
                <img v-lazy="cover_url + '&size=400'" style="width: 100%;height: 200px;">
            </div>
            <strong>{{title}}</strong>
            <br>
            创建时间：{{begin_time_text}}
        </van-cell>
    </div>
</template>

<script>
    export default {
        props: ['id','begin_time_text','title','cover_url'],
        name: "HumanwallCard",
        data() {
            return {
            }
        }
    }
</script>

<style scoped>

</style>
