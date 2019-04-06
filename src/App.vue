<template>
    <div id="app">
        <div v-if="$store.state.loading" class="loading">
            正在加载配置中，请稍后...
        </div>
        <router-view v-else></router-view>
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

    export default {
        name: 'app',
        data() {
            return {
                showInitMsg: false
            }
        },
        watch : {
            '$store.state.config' (val){
                if (val['init:msg'] && val['init:msg'].length > 0)
                    this.showInitMsg = true
            }
        },
        created() {
            this.$store.dispatch('init')
        }
    }
</script>

<style>
    .loading {
        text-align: center;
    }
</style>
