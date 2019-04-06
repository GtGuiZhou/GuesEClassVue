<template>
    <div>
        <!--string类型-->
        <div v-if="type === 'string'">
            <van-field
                    v-model="val"
                    type="textarea"
                    :placeholder="'请输入' + label"
                    rows="4"
                    autosize
            />

            <van-button type="primary" size="large" @click="handleSave()">保存配置</van-button>
        </div>

        <!--list类型-->
        <div v-if="type === 'list'" class="list">
            <div style="text-align: center" v-if="!val">
                暂无内容
            </div>
            <van-cell
                    v-for="(item ,key) in val" :key="key"
                    :title="item" >
                <van-icon slot="right-icon" name="cross" class="custom-icon" />
            </van-cell>
        </div>
    </div>
</template>

<script>
    import crud from './mixins/crud'
    export default {
        props: ['label','type','field','data'],
        mixins: [crud],
        name: "Config",
        data () {
            return {
                val: null
            }
        },
        activated() {
            this.val = this.data
        },
        created() {
            this.val = this.data
        },
        methods: {
            handleSave() {
                this.onUpdate(this.field,{field:this.field,value:this.val,type:this.type,desc_text:this.label})
                    .then(
                        () => {
                        this.$emit('close')
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .list{
        background: white;
        height: 300px;
    }
</style>
