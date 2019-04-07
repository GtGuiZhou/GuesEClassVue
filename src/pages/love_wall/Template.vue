<template>
    <div >
        <van-cell
                v-for="(item,index) in templates" :key="index"
        >
            <div style="text-align: center">
                <h3>模板-{{index + 1}}</h3>
            </div>
            <!--内容-->
            <div style="text-align: center">
                <div v-html="item"></div>
                <van-button type="primary" @click="$emit('change',item)">使用</van-button>
            </div>
        </van-cell>
    </div>
</template>

<script>
    import {IndexOfTemplate} from "../../api/sys.lovewall";

    export default {
        name: "LoveWallTemplate",
        props: ['form'],
        data() {
            return {
                templates: []
            }
        },
        created () {
            IndexOfTemplate(this.form).then(
                res => {
                    this.templates = res
                }
            )
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
