<template>
    <div>
        <van-cell
                @click="$router.push('/video/play/' + id)"
                class="video">
            <div style="position: relative">
                <div class="play">
                    <van-icon name="play-circle" size="4rem"></van-icon>
                </div>
                <img v-lazy="cover_url + '&size=400'">
            </div>
            <strong>{{title}}</strong>
            <br>
            {{desc_text}}
        </van-cell>
    </div>
</template>

<script>
    export default {
        props: ['id','desc_text','title','cover_url'],
        name: "VideoCard",
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
    .video img{
        width: 100%;
        height: 200px;
    }

    .play {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
