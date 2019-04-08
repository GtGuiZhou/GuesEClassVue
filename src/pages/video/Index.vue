<template>
    <div>
        <van-cell>
            <strong style="font-size: 1.7em">视频</strong>
        </van-cell>
        <div v-loading="crudLoading">
           <video-card
                   v-for="(item,index) in items" :key="index"
                   :id="item.id"
                   :desc_text="item.desc_text"
                   :title="item.title"
                   :cover_url="item.cover_url"
           ></video-card>
        </div>
    </div>
</template>

<script>
    import VideoCard from "./Card";
    export default {
        name: "VideoIndex",
        components: {VideoCard},
        data () {
            return {
                items: []
            }
        },
        created() {
            this.onLoadAll('video',this.items)
        }
    }
</script>

<style scoped>

</style>
