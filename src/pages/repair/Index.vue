<template>
    <div >
        <van-nav-bar
                left-arrow
                title="寝室维修"
                left-text="返回"
                @click-left="$router.back(-1)">
        </van-nav-bar>
        <van-field v-model="form.content" placeholder="请填写报修问题" clearable   type="textarea"
                   rows="3"
                   autosize>
        </van-field>
        <van-field v-model="form.address" placeholder="请填写宿舍位置" clearable  ></van-field>
        <van-field v-model="form.phone" placeholder="请填写您的手机" clearable   type="number"></van-field>
        <van-cell>
            <van-button  type="primary" size="large" @click="submit">提交工单</van-button>
        </van-cell>
    </div>
</template>

<script>
    import {Add} from "../../api/sys.repair";

    export default {
        name: "Repair",
        data () {
            return {
                form: {
                    content: '',
                    phone: '',
                    address: ''
                },
            }
        },
        methods: {

            submit(){
                // on cancel
                const toast = this.$toast({
                    mask: true,
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    type: 'loading'
                });
                Add(this.form).then(
                    () => {
                        this.$toast('提交成功')
                    }
                ).catch(
                    () => {
                        toast.clear()
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
