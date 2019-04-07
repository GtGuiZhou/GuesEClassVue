<template>
    <div>
        <van-panel v-for="(item,index) in items" :key="index">
            <!--表白卡片-->
            <love-card
                    v-if="item.show_type === 'lovewall'"
                    :user_name="item.user_name"
                    :create_time_text="item.create_time_text"
                    :id="item.id"
                    :content="item.content"
                    :comment_number="item.comment_number"
                    :image_url="item.image_url"
            ></love-card>
            <!--视频卡片-->
            <video-card
                    v-if="item.show_type === 'video'"
                    :id="item.id"
                    :desc_text="item.desc_text"
                    :title="item.title"
                    :cover_url="item.cover_url"
            ></video-card>
        </van-panel>
    </div>
</template>

<script>
    import crud from '@/components/mixins/crud'
    import VideoCard from "../../../video/Card";
    import LoveCard from "../../../love_wall/LoveCard";

    const module = 'index'
    export default {
        name: "IndexList",
        components: {LoveCard, VideoCard},
        mixins: [crud],
        data() {
            return {
                items: [],
                form: {}
            }
        },
        created() {
            if ('id' in this.$route.params) {
                this.onRead(module, this.form)
            }
            let tmp = []
            this.onLoadAll(module, tmp).then(
                () => {
                    tmp.forEach(item => {
                        this.items.push(JSON.parse(item))
                    })
                }
            )
        },
        methods: {
            submit() {
                this.onAdd(module, this.form, this.items)
            }
        }
    }
</script>

<style scoped>

</style>
