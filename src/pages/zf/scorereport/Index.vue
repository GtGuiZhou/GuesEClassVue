<template>
    <div>
        <van-nav-bar
                left-arrow
                left-text="返回"
                right-text="更新"
                title="成绩"
                @click-left="$router.back(-1)"
                @click-right="$router.push('/zf/update')"
        />
        <van-search placeholder="可输入课程名称/学年/必修/选修搜索" v-model="search" background="#fff"></van-search>
        <van-cell v-if="!items" style="margin-top: 100px;"  @click="$router.push('/zf/update')">
            <div style="text-align: center;color: darkcyan;text-decoration: underline darkcyan">
                <span href="#" @click="$router.push('/zf/update')" >暂无数据,点击跳转更新...</span>
            </div>
        </van-cell>

        <van-collapse v-model="activeNames">
            <van-collapse-item
                    v-for="(item,index) in list" :key="index"
                    :title="item[3]" :name="index">
                <!--标题-->
                <div slot="title"  :style="{color: item.score < 60?'red': ''}">
                    {{item[3]}}
                </div>
                <!--右侧内容-->
                <span slot="value" :style="{color:item.score >= 60?'#323233':'red'}" >
                    <van-tag v-if="item.score < 60" type="danger">挂科</van-tag>
                        <span v-if="item.score < 10">&nbsp;</span>
                        <span v-if="item.score < 100">&nbsp;</span>
                        {{item.score}}
                </span>
                <!--折叠内容-->
                <div>学期：{{item[0]}}学年&nbsp;&nbsp;第{{item[1]}}学期</div>
                <div>类型：{{item[4]}}</div>
                <div>学分：{{item[6]}} &nbsp;&nbsp; 绩点：{{item[7]}}</div>
                <div>正考成绩：{{item[8]}}</div>
                <div>补考成绩：{{item[10]}}</div>
                <div>重修成绩：{{item[11]}}</div>
                <div>课程代码：{{item[2]}}</div>
            </van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
    import {ScoreReport} from "../../../api/sys.zf";

    export default {
        name: "ScoreReport",
        data(){
            return {
                activeNames: [],
                items: [],
                search: ''
            }
        },
        created() {
            ScoreReport().then(
                res => {
                    if (!res){
                        this.$dialog.confirm({
                            title: '提示',
                            message: '暂无课表数据，是否跳转更新？'
                        }).then(() => {
                            this.$router.push('zf/update')
                        });
                        return;
                    }
                    res.score_report.reverse().forEach((item) => {
                        item[8] = parseInt(item[8])?parseInt(item[8]):0
                        item[10] = parseInt(item[10])?parseInt(item[10]):0
                        item[11] = parseInt(item[11])?parseInt(item[11]):0
                        item.score = Math.max(item[8], item[10], item[11])
                        this.items.push(item)
                    })
                }
            )
        },
        computed: {
            list() {
                return this.items.filter(item => {
                    if (this.search.length > 0){
                        return item[3].indexOf(this.search) >= 0 || item[0].indexOf(this.search) >= 0 || item[4].indexOf(this.search) >= 0
                    }
                    return true
                })
            }
        }

    }
</script>

<style scoped>
.value{

}
</style>
