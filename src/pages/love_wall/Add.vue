<template>
    <div>
        <van-nav-bar
                v-if="show === 'form'"
                left-arrow
                left-text="返回"
                title="添加表白"
                @click-left="$router.back(-1)"
        />
        <van-nav-bar
                v-if="show === 'template'"
                left-arrow
                left-text="返回"
                title="选择模板"
                @click-left="show = 'form'"
        />

        <div v-if="show === 'form'">
            <van-field
                    v-model="form.content"
                    type="textarea"
                    placeholder="请输入表白内容"
                    rows="4"
                    autosize
                    require
            />
            <van-field required v-model="form.from_name" label="你的名字"   clearable placeholder="用于生成信件"></van-field>
            <van-field  v-model="form.from_email" label="你的邮箱"   clearable placeholder="可以收到回复"></van-field>
            <van-field required v-model="form.to_name" label="她/他的名字"   clearable placeholder="用于生成信件"></van-field>
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
            <van-cell title="选择信件模板" is-link @click="show = 'template'" :value="form.template.length > 0?'已选择':''">
            </van-cell>

            <van-cell>
                <van-button type="warning" size="large" @click="submit" >提交</van-button>
            </van-cell>
            <br>
            <br>
            <br>
            <div style="text-align: center">
                <span style="color: lightskyblue;" @click="question">想要制作更加精美的信件？</span>
            </div>
        </div>
        <!--模板-->
        <div v-if="show === 'template'">
            <van-notice-bar
                    v-if="show"
                    text="提示：有部分模板出现文字重合的情况，是因为不兼容导致的，但是发送出去的信件是正常显示的，不用担心。"
                    left-icon="volume-o"
                    mode="closeable"
            />
            <love-wall-template
                    :form="form"
                    @change="template => {form.template = template;show = 'form'}"></love-wall-template>
        </div>
        <van-dialog
                :beforeClose="closeQr"
                v-model="showQr"
                title="提示"
                show-cancel-button
                confirmButtonText="返回上一页"
        >
            <div style="text-align: center">
                <vue-qr
                        style="width: 100%"
                        :bgSrc='qrImg'
                        :text="qr_url" ></vue-qr>
                <br>
                扫描上方二维码，也可以看到你的表白信件哦！
            </div>
        </van-dialog>
    </div>
</template>

<script>
    import {Upload as ElUpload} from 'element-ui'
    import {FileSysUploadUrl} from "@/api/sys.file"
    import LoveWallTemplate from "./Template";
    import VueQr from 'vue-qr'
    import qrSrc from '@/assets/qr.png'
    export default {
        name: "LoveWallAdd",
        components: {LoveWallTemplate, ElUpload,VueQr},
        data() {
            return {
                qr_url: '',
                showQr: false,
                show: 'form',
                templates: [],
                form: {
                    content: '致最最最可爱漂亮的小菲菲',
                    from_name: '郭涛',
                    to_name: '钟颖菲',
                    // image_url: 'http://gues.eclass.cn/api/filesys/read?filename=84fb0ded098c535f7feb7b03b7907200.png',
                    image_url: '',
                    from_email: '735311619@qq.com',
                    to_email: '735311619@qq.com',
                    template: '',
                },
            }
        },
        computed: {
            uploadUrl(){
                return FileSysUploadUrl();
            },
            qrImg(){
                return qrSrc
            }
        },
        methods: {
            closeQr (action,done) {
                done(true)
                if (action === 'confirm')
                    this.$router.back()
            },
            question() {
                this.$dialog.alert({
                    title: '提示',
                    message: '该功能正在试验阶段，为了避免发生数据泄露的情况，想要体验的同学请添加系统管理员QQ735311619'
                })
            },
            submit(){
                this.onAdd('lovewall',this.form).then(
                    res => {
                        this.qr_url = res.qr_code
                        this.showQr = true
                    }
                )
            },
            onSuccessImg(response){
                this.form.image_url = response.data.url
            },
            handleRemoveImg() {
                this.form.image_url = ''
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
