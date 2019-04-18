<template>
    <div style="display: flex">
        <gt-upload-item v-for="(item,index) in items" :key="index"
                        :file="item"></gt-upload-item>
        <gt-upload-plus
                @change="onChange"
                v-if="limit - items.length > 0 || limit === 0"></gt-upload-plus>
    </div>
</template>

<script>
    import GtUploadItem from "./Item";
    import GtUploadPlus from "./Plus";
    export default {
        name: "GtUpload",
        components: {GtUploadPlus, GtUploadItem},
        props: {
            limit: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                items: []
            }
        },
        created() {

        },
        methods: {
            submit() {

            },
            onChange (files) {
                for (let i = 0;i < files.length; i++)
                    this.items.push(files[i])
            }
        }
    }
</script>

<style scoped>

</style>
