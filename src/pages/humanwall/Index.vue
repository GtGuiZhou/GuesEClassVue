<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                right-text="添加"
                title="人人墙"
                @click-left="$router.back(-1)"
                @click-right="$router.push('/humanwall/add')"
        />
        <div v-loading="crudLoading">
            <div
                    v-if="items.length < 1"
                    style="color: gray;text-align: center">
                <img src="../../assets/暂无内容.svg" />
            </div>
            <van-panel v-for="(item,index) in items" :key="index">
                <!--表白卡片-->
                <humanwall-card
                                :id="item.id"
                                :create_time_text="item.create_time_text"
                                :title="item.title"
                                :cover_url="item.cover_url"
                ></humanwall-card>
            </van-panel>

        </div>
    </div>
</template>

<script>

    import HumanwallCard from "./Card";
    const module = 'humanwall'
    export default {
        name: "HumanWall",
        components: {HumanwallCard},
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
