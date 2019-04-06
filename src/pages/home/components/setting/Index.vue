<template>
    <div>
        <van-cell-group>
            <van-cell
                    @click="handleConfig('初始弹窗内容','string','init:msg',$store.state.config['init:msg'])"
                    title="初始弹窗内容" :label="$store.state.config['init:msg']" is-link/>
            <van-cell
                    @click="handleConfig('管理员列表','list','sys:admins',$store.state.config['sys:admins'])"
                    title="管理员列表" :label="$store.state.config['sys:admins']" is-link/>
        </van-cell-group>
        <van-popup v-model="show" position="bottom" >
            <Config @close="show = false" :label="label" :field="field" :type="type" :data="data"></Config>
        </van-popup>
    </div>
</template>

<script>
    import Config from "./Config";

    export default {
        name: "Setting",
        components: {Config},
        data() {
            return {
                show: false,
                label: '',
                type: '',
                field: '',
                data: ''
            }
        },
        created(){
          this.$store.dispatch('initUser')
        },
        methods: {
            handleConfig(label,type,field,data){
                this.label = label
                this.type = type
                this.field = field
                this.data = data
                this.show  = true
            }
        }
    }
</script>

<style scoped>

</style>
