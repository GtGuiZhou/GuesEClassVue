<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                right-text="添加"
                title="表白墙"
                @click-left="$router.back(-1)"
                @click-right="$router.push('/lovewall/add')"
        />
        <div v-loading="crudLoading">
            <van-panel v-for="(item,index) in items" :key="index">
                <!--表白卡片-->
                <love-card :user_name="item.user_name"
                           :create_time_text="item.create_time_text"
                           :id="item.id"
                           :content="item.content"
                           :comment_number="item.comment_number"
                           :image_url="item.image_url"
                ></love-card>
            </van-panel>

        </div>
    </div>
</template>

<script>
    import crud from '@/components/mixins/crud'
    import LoveCard from "./LoveCard";

    const module = 'lovewall'
    export default {
        name: "LoveWall",
        components: {LoveCard},
        mixins: [crud],
        data() {
            return {
                items: [],
                form: {}
            }
        },
        created() {
            this.onLoadAll(module, this.items)
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
