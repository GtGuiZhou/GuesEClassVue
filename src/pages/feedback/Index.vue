<template>
    <div >
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="意见反馈"
                @click-left="$router.back(-1)"
        />
        <img src="../../assets/feedback.jpg" width="100%"/>
        <van-cell>
            <van-field
                    v-model="form.content"
                    type="textarea"
                    placeholder="请在这儿输入意见反馈内容"
                    rows="4"
                    autosize
            />

            <van-button type="primary" size="large" @click="submit">提交</van-button>
        </van-cell>

    </div>
</template>

<script>
    export default {
        name: "FeedBack",
        data() {
            return {
                form: {
                    content: ''
                }
            }
        },
        methods: {
          submit(){
              this.onAdd('feedback',this.form).then(
                  () => {
                      this.$dialog.alert({title: '提示',message:'非常感谢您的反馈，我们会积极响应您的反馈，并在适当的时候为您献上大礼以作答谢~'})
                      this.$router.back()
                  }
              )
          }
        },
    }
</script>

<style scoped>

</style>
