<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="发起提问"
                @click-left="$router.back(-1)"
        />
        <van-field
                v-model="form.content"
                type="textarea"
                placeholder="请输入问题内容"
                rows="4"
                autosize
        />
        <van-cell>
            <van-button type="warning" size="large" @click="submit" >提交</van-button>
        </van-cell>
    </div>
</template>

<script>
    const module = 'qa'
    export default {
        name: "QaAdd",
        data() {
            return {
                form: {
                    content: ''
                }
            }
        },
        methods: {
            submit() {
                this.onAdd(module, this.form).then(
                    () => {
                        this.$router.back()
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
