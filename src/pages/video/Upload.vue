<template>
    <div >
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="上传视频"
                right-text="保存"
                @click-right="save"
                @click-left="$router.back(-1)"
        />
        <div v-loading="crudAddLoading">
            <van-notice-bar
                    v-if="show"
                    text="视频上传成功，记得点击右上角保存哦～"
                    left-icon="volume-o"
            />
            <br/>
            <van-field v-model="form.title" placeholder="请填写视频标题" clearable  ></van-field>
            <van-field v-model="form.desc_text" placeholder="请填写视频详情" clearable   type="textarea"
                       rows="3"
                       autosize>
            </van-field>

            <!--选择标签-->
            <van-cell>
                <select-tag
                        :action-method="actionMethod"
                        @change="tags => form.tags = tags"></select-tag>
            </van-cell>

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
                        <van-button  type="primary">点击上传封面</van-button>
                        <div slot="tip" class="el-upload__tip">只能上传bmp,jpeg,jpg,png,gif文件，且不超过50M</div>
                    </el-upload>
                </div>
            </van-cell>
            <van-cell >
                <div  style="text-align: center">
                    <el-upload
                            :limit="1"
                            list-type="picture"
                            :on-remove="handleRemove"
                            :on-success="onSuccess"
                            :before-upload="beforeUpload"
                            :action="uploadUrl"
                            :file-list="fileListImg">
                        <van-button  type="primary">点击上传视频</van-button>
                        <div slot="tip" class="el-upload__tip">只能上传mp4,flv,rmvb,avi文件，且不超过50M</div>
                    </el-upload>
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
        components: {SelectTag, ElUpload},
        mixins:[crud],
        data () {
            return {
                show:false,
                fileList: [],
                fileListImg: [],
                form: {
                    tags: [],
                    title: '',
                    url: '',
                    desc_text: '',
                    cover_url: ''
                }
            }
        },
        computed: {
            uploadUrl(){
                return FileSysUploadUrl();
            },
            actionMethod(){
                return TagList
            }
        },
        methods : {
            save(){
                this.onAdd('video',this.form)
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
            onSuccess(response){
                this.form.url = response.data.url
                this.show = true
            },
            handleRemove() {
                this.form.url = ''
            },
            beforeUpload(file) {
                if(file.size / 1024 / 1024 > 50) {
                    this.$toast('文件大小不能超过50M')
                    return false
                }

                if (file.type.indexOf('video/mp4') !== 0
                    && file.type.indexOf('video/avi') !== 0
                    && file.type.indexOf('video/flv') !== 0
                    && file.type.indexOf('video/rmvb') !== 0
                ){
                    this.$toast('必须是mp4,flv,rmvb,avi格式的视频文件')
                    return false
                }
            }
        }
    }
</script>

<style scoped>

</style>
