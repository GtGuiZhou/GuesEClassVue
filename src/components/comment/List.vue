<template>
    <div>
        <van-field
                type="textarea"
                autosize
                v-model="form.content" clearable placeholder="请输入评论内容">
            <van-button slot="button" size="small" type="primary" @click="submit">发送</van-button>
        </van-field>
        <div
                v-if="items.length < 1"
                style="color: gray;text-align: center">
            <img src="../../assets/暂无内容.svg" />
        </div>
        <div >
            <van-cell
                    v-for="(item,index) in items" :key="index"
            >
                <!--头-->
                <div style="display: flex;justify-content: space-between">
                    <span style="color: gray">{{item.user_name}}</span>
                    <span style="color: red" @click="$emit('answer',item.user_name,item.id)">回复</span>
                </div>
                <!--楼层-->
                <div>
                    <small style="color:gray;">#{{index+1}}&nbsp;{{item.create_time_text}}</small>
                    &nbsp;<small>{{answerFloor(item.answer_id)}}</small>
                </div>
                <!--内容-->
                <div>
                    {{item.content}}
                </div>
            </van-cell>
        </div>
    </div>
</template>

<script>
    import crud from '@/components/mixins/crud'
    export default {
        mixins: [crud],
        name: "CommentList",
        props: {
          module: {
              type: String,
              required: true
          },
            module_id: {
                type: Number,
            }
        },
        data() {
            return {
                form: {
                    content:'',
                    module: '',
                    answer_id: 0,
                    module_id: ''
                },
                items: [
                ]
            }
        },
        created () {
            this.form.module = this.module
            this.form.module_id = this.module_id
            this.onLoadAll('comment',this.items,{module:this.module})
        },
        methods: {
            answerFloor(id){
                let text = ''
                this.items.forEach((item,index) => {
                    if (item.id === id){
                        text = `回复#${index+1}`
                    }
                })

                return text
            },
            submit(){
                this.onAdd('comment',this.form,this.items).then(
                    () => {
                        this.form.content = ''
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>
