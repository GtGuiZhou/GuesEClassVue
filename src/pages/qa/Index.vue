<template>
    <div>
        <qa-card
                v-for="item in items" :key="item.id"
                :id="item.id"
                :user_name="item.user_name"
                :create_time_text="item.create_time_text"
                :desc_text="item.desc_text"
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
