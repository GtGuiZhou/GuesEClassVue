<template>
    <div id="app">
        <div v-if="$store.state.loading" class="loading">
            正在加载配置中，请稍后...
        </div>
        <router-view v-else></router-view>
        <!--公告提示-->
        <van-dialog
                v-model="showInitMsg"
                title="系统"
        >
            <!--<van-nav-bar-->
                    <!--title="系统"-->
            <!--/>-->
            <div style="text-align: center">
                {{$store.state.config['init:msg']}}
            </div>
        </van-dialog>
    </div>
</template>

<script>

    import {Close, Cnt, Handled} from "./api/sys.repair";

    export default {
        name: 'app',
        data() {
            return {
                showInitMsg: false,
                showRepairConfirm: false
            }
        },
        watch : {
            '$store.state.config' (val){
                if (val['init:msg'] && val['init:msg'].length > 0)
                    this.showInitMsg = true
            },
            '$store.state.user' (val){
                if (val['repair']){
                    this.$dialog.confirm({
                        title: '您的寝室报修是否完成？',
                        confirmButtonText: '已经完成',
                        cancelButtonText: '未完成',
                        message: '报修内容：' + val['repair']['content']
                    }).then(() => {
                        // on confirm
                        Handled(val['repair']['id'])
                    }).catch(() => {
                        this.$dialog.confirm({
                            title: '提示',
                            confirmButtonText: '催促报修订单',
                            cancelButtonText: '撤销报修订单',
                            message: '你还可以选择如下做法'
                        }).then(() => {
                            // on confirm
                            Cnt(val['repair']['id']).then(
                                () => {
                                    this.$toast('催促维修订单成功')
                                }
                            )

                        }).catch(() => {
                            // on cancel
                            Close(val['repair']['id']).then(
                                () => {
                                    this.$toast('撤销维修订单成功')
                                }
                            )
                        });
                    });
                }

            }
        },
        created() {
            this.$store.dispatch('init')
            this.$store.dispatch('initUser')
        }
    }
</script>

<style>
    .loading {
        text-align: center;
    }
</style>
