<template>
    <div style="margin: 0 5px;width: 100px;height: 100px;display: flex;justify-content: center;align-items: center" class="plus">
        <img src="./plus.svg" style="width: 40px;height: 40px">
        <input
                id="gtUploadPlusId"
                :multiple="multiple"
                type="file" style="position: absolute;width: 100%;height: 130%;top: -30px;left: 0px;"
                @change="onChange">
    </div>
</template>

<script>
    export default {
        name: "GtUploadPlus",
        props: {
            multiple :{
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        created() {

        },
        methods: {
            onChange(e){
                // let files = []
                // for (let i =0;i < e.srcElement.files.length;i++)
                //     files.push(e.srcElement.files[i])
                let files = e.srcElement.files
                this.$emit('change',files)
            },
            submit() {

            }
        }
    }
</script>

<style scoped>
.plus{
    position: relative;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    overflow: hidden;
}
</style>
