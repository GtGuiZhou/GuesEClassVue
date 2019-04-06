<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                right-text="绑定教务系统"
                title="更新教务系统"
                @click-left="$router.back(-1)"
                @click-right="$router.push('/zf')"
        />
        <van-cell >
            <div style="text-align: center">
                <img  :src="check_code_url" @click="checkCodeRefresh"><br>
                <a href="#" @click=" checkCodeRefresh">验证码不显示？点我！</a>
            </div>
        </van-cell>

        <van-field ref="code1"  v-model="code" placeholder="请输入验证码" />

        <van-cell>
            <van-button type="primary" @click="update" size="large">更新</van-button>
        </van-cell>

        <van-dialog
                v-model="show"
                title="更新完毕"
                confirmButtonText="取消"
        >
            <van-cell title="前往查课表" @click="$router.push('/timetable')" is-link></van-cell>
            <van-cell title="前往查成绩" @click="$router.push('/scorereport')" is-link></van-cell>
        </van-dialog>
    </div>
</template>

<script>
    import {CheckCode, Update} from "../../api/sys.zf";

    export default {
        name: "ZfUpdate",
        data () {
            return {
                code: '',
                check_code_url: '',
                show:false
            }
        },
        created () {
            this.checkCodeRefresh()
        },
        methods: {
            checkCodeRefresh(){
                this.check_code_url =  CheckCode() +"?rnd="+ Math.random()
            },
            update () {
                // on cancel
                const toast = this.$toast({
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    type: 'loading'
                });

                Update({code:this.code}).then(
                    () => {
                        toast.clear()
                        this.$toast('更新成功')
                        this.show = true
                    }
                ).catch(
                    res => {
                        toast.clear()
                        if (res.message.indexOf('密码错误') >= 0){
                            this.$dialog.alert({
                                title:'提示',
                                message: '密码忘记找辅导员或到本院教学科研科恢复'
                            });
                        }

                        if (res.message.indexOf('还未有绑定教务系统') >=0 ){
                            this.$dialog.confirm({
                                title: '提示',
                                message: '需要先绑定教务系统,是否跳转到绑定教务系统？'
                            }).then(() => {
                                this.$router.push('/zf')
                            });
                        }
                        this.checkCodeRefresh()
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
