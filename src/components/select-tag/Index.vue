<template>
    <div>
        <van-tag
                plain
                @click="add(tag,index)"
                color="rgba(144,147,153,.2)"
                v-for="(tag,index) in tags" :key="index"
        >
            <span style="color: #909399">{{tag}}</span>
        </van-tag>
        <br>
        <br>
        <el-select
                style="width: 100%"
                @change="$emit('change',value)"
                v-model="value"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="请选择标签">
        </el-select>
    </div>
</template>

<script>
    import {Select as ElSelect} from 'element-ui'
    export default {
        name: "SelectTag",
        props: ['actionMethod'],
        components: {ElSelect},
        data() {
            return {
                value: [],
                tags: []
            }
        },
        created() {
            this.actionMethod().then(
                res => {
                    this.tags = res
                }
            )
        },
        methods: {
            add(tag,index) {
                this.value.push(tag)
                this.tags.splice(index,1)
                this.$emit('change')
            }
        }
    }
</script>

<style scoped>

</style>
