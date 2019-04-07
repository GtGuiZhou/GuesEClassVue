<template>
    <div>
        <van-cell>
            <strong style="font-size: 1.7em">首页</strong>
        </van-cell>

        <van-cell>
            <div style="display: flex;justify-content: space-between;padding: 0 20px">
                <span @click="$router.push('/timetable')">
                    <div style="text-align: center">
                        <img src="../../../../assets/课表.svg" height="25"/>
                        <div>课表</div>
                    </div>
                </span>
                <span @click="$router.push('/scorereport')">
                    <div style="text-align: center">
                        <img src="../../../../assets/成绩.svg" height="25"/>
                        <div>成绩</div>
                    </div>
                </span>
                <span @click="$router.push('/repair')">
                    <div style="text-align: center">
                        <img src="../../../../assets/维修.svg" height="25"/>
                        <div>维修</div>
                    </div>
                </span>
                <span @click="$router.push('/qa')">
                    <div style="text-align: center">
                        <img src="../../../../assets/问答.svg" height="25"/>
                        <div>问答</div>
                    </div>
                </span>
            </div>
        </van-cell>

        <van-cell>
            <van-swipe :autoplay="3000" style="text-align: center">
                <van-swipe-item
                        @click="$router.push('/lovewall')"
                        class="banner"
                        v-for="(image, index) in images" :key="index">
                    <img :src="image"/>
                </van-swipe-item>
            </van-swipe>
        </van-cell>

        <index-list></index-list>
    </div>
</template>

<script>
    import wallImg from "@/assets/wall2.jpg"
    import IndexList from "../list/List";

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
        components: {IndexList}
    }
</script>

<style scoped>
    .banner img {
        width: 100%;
        height: 125px;
        border-radius: 15px;
    }
</style>
