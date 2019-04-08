<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                right-text="提问"
                title="问答"
                @click-left="$router.back(-1)"
                @click-right="$router.push('/qa/add')"
        ></van-nav-bar>
        <qa-card
                v-for="item in items" :key="item.id"
                :id="item.id"
                :user_name="item.user_name"
                :create_time_text="item.create_time_text"
                :content="item.content"
        ></qa-card>
    </div>
</template>

<script>
    import crud from '@/components/mixins/crud'
    import QaCard from "./Card";

    const module = 'qa'
    export default {
        name: "QaIndex",
        components: {QaCard},
        mixins: [crud],
        data() {
            return {
                items: []
            }
        },
        created() {
            this.onLoadAll(module, this.items)
        }
    }
</script>

<style scoped>

</style>
