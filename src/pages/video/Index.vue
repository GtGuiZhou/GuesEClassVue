<template>
    <div>
        <div v-loading="crudLoading">
            <van-cell
                    @click="$router.push('/video/play/' + item.id)"
                    v-for="(item,index) in items" :key="index" class="video">
                <div style="position: relative">
                    <div class="play">
                        <van-icon name="play-circle" size="4rem"></van-icon>
                    </div>
                    <img :src="item.cover_url + '&size=400'">
                </div>
                <strong>{{item.title}}</strong>
                <br>
                {{item.desc_text}}
            </van-cell>
        </div>
    </div>
</template>

<script>
    import crud from '@/components/mixins/crud'
    export default {
        name: "VideoIndex",
        mixins: [crud],
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
    .video img{
        width: 100%;
        height: 200px;
        border-radius: 20px;
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
