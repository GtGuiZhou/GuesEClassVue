<template>
    <div >
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="添加人人墙"
                right-text="保存"
                @click-right="save"
                @click-left="$router.back(-1)"
        />
        <van-notice-bar
                text="如果上传按钮点击无效，请点击右上角的x按钮，重新进入本应用（刷新无效）"
                left-icon="volume-o"
        />
        <div v-loading="crudAddLoading">
            <van-field v-model="form.title" placeholder="请填写标题" clearable  ></van-field>
            <van-field v-model="form.desc_text" placeholder="请填写详情" clearable   type="textarea"
                       rows="3"
                       autosize>
            </van-field>

            <van-cell >
                <div  style="text-align: center">
                    <el-upload
                            :limit="1"
                            list-type="picture"
                            :on-success="onSuccessImg"
                            :before-upload="beforeUploadImg"
                            :on-remove="handleRemoveImg"
                            :action="uploadUrl"
                            :file-list="fileList">
                        <van-button plain type="primary">点击上传封面</van-button>
                        <div slot="tip" class="el-upload__tip">只能上传bmp,jpeg,jpg,png,gif文件，且不超过50M</div>
                    </el-upload>
                </div>
            </van-cell>

            <van-cell >
                <div style="text-align: center">
                    <van-button @click="save" size="large" type="primary">保存</van-button>
                </div>
            </van-cell>
        </div>
    </div>
</template>

<script>
    import crud from '../../components/mixins/crud'
    import {Upload as ElUpload} from 'element-ui'
    import {FileSysUploadUrl} from "@/api/sys.file"
    import SelectTag from "../../components/select-tag/Index";
    import {TagList} from "../../api/sys.video";
    export default {
        name: "VideoUpload",
        components: { ElUpload},
        mixins:[crud],
        data () {
            return {
                show:false,
                fileList: [],
                fileListImg: [],
                form: {
                    title: '',
                    desc_text: '',
                    cover_url: ''
                }
            }
        },
        computed: {
            uploadUrl(){
                return FileSysUploadUrl();
            }
        },
        methods : {
            save(){
                this.onAdd('humanwall',this.form).then(
                    () => {
                        this.$router.back()
                    }
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
            }
        }
    }
</script>

<style scoped>

</style>
