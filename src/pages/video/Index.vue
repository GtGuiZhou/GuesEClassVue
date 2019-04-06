<template>
    <div>
        <div v-loading="crudLoading">
            <van-cell v-for="(item,index) in items" :key="index" class="video">
                <img :src="item.cover_url + '&size=150'">
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
</style>
