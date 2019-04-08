<template>
    <div v-loading="crudLoading">
        <van-field
                v-model="form.content"
                type="textarea"
                :placeholder="'回复' + answer_username + ':'"
                rows="4"
                autosize
        />
        <van-cell>
            <van-button size="large" type="primary" @click="submit">提交</van-button>
            <br>
            <br>
            <van-button size="large"  @click="$emit('back')">返回</van-button>
        </van-cell>
    </div>
</template>

<script>
    export default {
        name: "CommentAnswer",
        props: {
            module: {
                type: String,
                required: true
            },
            answer_username: {
                type: String,
                required: true
            },
            answer_id: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                form: {
                    content:'',
                    module: '',
                }
            }
        },
        created () {
          this.form.module = this.module
        },
        methods: {
            submit(){
                this.onAdd('comment',{...this.form,answer_id:this.answer_id}).then(
                    () => {
                        this.form.content = ''
                        this.$emit('back')
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
