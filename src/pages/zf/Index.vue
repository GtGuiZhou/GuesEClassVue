<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                :title="title"
                @click-left="$router.back(-1)"
        >
        </van-nav-bar>
        <van-cell-group>
            <van-field v-model="form.act" label="账号" type="number" required clearable placeholder="请输入账号（学号）"></van-field>
            <van-field v-model="form.pwd" label="密码"   type="password" required  clearable placeholder="请输入密码"></van-field>
            <van-field v-model="form.code" label="验证码"  required  clearable placeholder="请输入验证码">
                <img style="position: relative;top: 4px" slot="button" :src="check_code_url" @click="checkCodeRefresh">
            </van-field>
            <div style="display: flex;justify-content: space-between;padding: 0 5px">
                <a href="#" @click="$dialog.alert({
                                title:'提示',
                                message: '密码忘记找辅导员或到本院教学科研科恢复'
                            });">忘记密码？</a>
                <a href="#" @click=" checkCodeRefresh">验证码不显示？点我！</a>
            </div>
            <br>
            <van-cell>
                <van-button size="large" type="primary" @click="submit">提交</van-button>
            </van-cell>
        </van-cell-group>
        <van-cell>
            <strong>提示(绑定失败看这)</strong><br>
            1.账号密码忘记请联系辅导员或班主任或所在学院教学科研科。
            <br>
            2.更改过教务系统的账号密码后需要到本页面重新绑定账号密码，否则无法进行教务系统数据查询。
        </van-cell>

        <van-dialog
                v-model="show"
                title="提示"
                confirmButtonText="取消"
        >
            <van-cell title="前往查课表" @click="$router.push('/timetable')" is-link></van-cell>
            <van-cell title="前往查成绩" @click="$router.push('/scorereport')" is-link></van-cell>
        </van-dialog>

    </div>
</template>

<script>
    import {CheckCode, Login} from "../../api/sys.zf";

    export default {
        name: 'BindUser',
        data () {
            return {
                title:'绑定教务系统账号',
                form: {
                    act: '',
                    pwd: '',
                    code: ''
                },
                show: false,
                loading: false,
                check_code_url: ''
            }
        },
        watch : {
            '$store.state.user' (val){
                if (val.zf_act.length > 1){
                    this.title = this.title + '(已绑定)'
                }
                if (this.form.act.length < 1){
                    this.form.act = val.zf_act
                    this.form.pwd = val.zf_pwd
                }
            }
        },
        created(){
            this.$store.dispatch('initUser')
            this.checkCodeRefresh()
        },
        methods: {
            checkCodeRefresh(){
                this.check_code_url =  CheckCode() +"?rnd="+ Math.random()
            },
            submit () {
                if (this.form.pwd === '000000') {
                    this.$dialog.confirm({
                        title: '是否跳转到教务系统',
                        message: '检测到您的密码还是系统初始密码，请您先进入教务系统重新设定密码，如果是系统误判请点击取消按钮。'
                    }).then(() => {
                        window.location.href = 'http://jwc.gues.edu.cn/jwxt.jsp?urltype=tree.TreeTempUrl&wbtreeid=1056'
                    });
                }

                // on cancel
                const toast = this.$toast({
                    duration: 0,       // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
                    type: 'loading'
                });

                Login(this.form).then(
                    () => {
                        toast.clear()
                        this.$toast('绑定成功')
                        this.show = true
                    }
                ).catch(
                    res => {
                        toast.clear()
                        if (res.message.indexOf('密码错误') >= 0){
                            this.$dialog.alert({
                                title:'密码错误',
                                message: '密码忘记找辅导员或到本院教学科研科恢复'
                            });
                        }
                        this.checkCodeRefresh()
                        this.form.code = ''
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
