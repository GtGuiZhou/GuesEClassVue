<template>
    <div>
        <div style="text-align: right;margin-top: 15px">
            <van-icon name="chat" size="1.2em" color="#07c160"/>&nbsp;&nbsp;&nbsp;
            <van-icon name="plus" size="1.2em" color="#07c160" @click="show = true"/> &nbsp;&nbsp;&nbsp;
        </div>
        <index v-if="active === 0"></index>
        <video-index v-if="active === 1"></video-index>
        <setting v-if="active === 2"></setting>
        <van-tabbar
                v-model="active"
                active-color="#07c160"
        >
            <van-tabbar-item  icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="play-circle-o">视频</van-tabbar-item>
            <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
        </van-tabbar>

        <van-popup v-model="show" position="bottom" >
            <van-cell @click="$router.push('/video/upload')">上传视频</van-cell>
            <van-cell @click="$router.push('/qa/add')">发起提问</van-cell>
            <van-cell @click="$router.push('/repair')">寝室报修</van-cell>
        </van-popup>
    </div>
</template>

<script>
    import Setting from "./components/setting/Index";
    import Index from "./components/index/Index";
    import VideoIndex from "../video/Index";

    export default {
        name: "Home",
        components: { VideoIndex, Index, Setting},
        data(){
            return {
                show: false,
                focus: '首页',
                active: 0,
            }
        }
    }
</script>

<style scoped>

</style>
