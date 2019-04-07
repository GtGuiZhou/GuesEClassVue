<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="添加表白"
                @click-left="$router.back(-1)"
        />
        <van-field
                v-model="form.content"
                type="textarea"
                placeholder="请输入表白内容"
                rows="4"
                autosize
                require
        />
        <van-field v-model="form.from_email" label="你的邮箱"   type="password" clearable placeholder="可以收到回复"></van-field>
        <van-field v-model="form.to_email" label="她/他的邮箱"   clearable placeholder="接收你的表白"></van-field>
        <van-cell >
            <div  style="text-align: center">
                <el-upload
                        :limit="1"
                        list-type="picture"
                        :on-success="onSuccessImg"
                        :before-upload="beforeUploadImg"
                        :on-remove="handleRemoveImg"
                        :action="uploadUrl"
                >
                    <van-button  type="warning" plain hairline>点击上传图片</van-button>
                    <div slot="tip" class="el-upload__tip">只能上传bmp,jpeg,jpg,png,gif文件，且不超过5M</div>
                </el-upload>
            </div>
        </van-cell>
        <van-cell>
            <van-button type="warning" size="large" @click="submit" >提交</van-button>
        </van-cell>
    </div>
</template>

<script>
    import {Upload as ElUpload} from 'element-ui'
    import crud from '@/components/mixins/crud'
    import {FileSysUploadUrl} from "@/api/sys.file"
    export default {
        name: "LoveWallAdd",
        mixins: [crud],
        components: {ElUpload},
        data() {
            return {
                form: {
                    content: '',
                    image_url: '',
                    from_email: '',
                    to_email: ''
                },
            }
        },
        computed: {
            uploadUrl(){
                return FileSysUploadUrl();
            }
        },
        methods: {
            submit(){
                this.onAdd(this.form).then(
                    () => {}
                )
            },
            onSuccessImg(response){
                this.form.cover_url = response.data.url
            },
            handleRemoveImg() {
                this.form.cover_url = ''
            },
            beforeUploadImg(file) {
                if(file.size / 1024 / 1024 > 50) {
                    this.$toast('文件大小不能超过50M')
                    return false
                }

                if (file.type.indexOf('image/bmp') !== 0
                    && file.type.indexOf('image/jpeg') !== 0
                    && file.type.indexOf('image/jpg') !== 0
                    && file.type.indexOf('image/png') !== 0
                    && file.type.indexOf('image/gif') !== 0
                ){
                    this.$toast('必须是bmp,jpeg,jpg,png,gif格式的图片文件')
                    return false
                }
            },
        }
    }
</script>

<style scoped>

</style>
