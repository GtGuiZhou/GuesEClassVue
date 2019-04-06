<template>
    <div>
        <van-cell>
            <strong style="font-size: 1.7em">首页</strong>
        </van-cell>

        <van-cell>
            <div style="display: flex;justify-content: space-between;padding: 0 20px">
                <span @click="$router.push('/timetable')">
                    <menu-item icon="star" > 课表</menu-item>
                </span>
                <span @click="$router.push('/scorereport')">
                    <menu-item icon="star" > 成绩</menu-item>
                </span>
                <span @click="$router.push('/repair')">
                <menu-item icon="setting" > 报修</menu-item>
                </span>
            </div>
        </van-cell>

        <van-cell>
            <van-swipe :autoplay="3000" style="text-align: center">
                <van-swipe-item
                        class="banner"
                        v-for="(image, index) in images" :key="index">
                    <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </van-cell>
    </div>
</template>

<script>
    import wallImg from "@/assets/wall.png"
    import MenuItem from "./MenuItem";
    export default {
        name: "Index",
        data() {
            return {
                images: [
                    wallImg
                    // 'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
                    // 'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
                    // 'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
                ]
            }
        },
        components: {MenuItem}
    }
</script>

<style scoped>
    .banner img{
        width: 100%;
        height: 125px;
        border-radius: 15px;
    }
</style>
