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
        <van-tabs v-model="active" animated  swipeable>
            <van-tab title="概览">
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
            </van-tab>

            <van-tab title="统计">
                <van-cell title="总成绩（不含选修）" :value="sumMainScore"></van-cell>
                <van-cell title="总成绩" :value="sumScore"></van-cell>
                <van-cell title="总学分（不含选修）" :value="sumMainLearnScore"></van-cell>
                <van-cell title="总学分" :value="sumLearnScore"></van-cell>
                <van-cell title="总绩点（不含选修）" :value="sumMainPoint"></van-cell>
                <van-cell title="总绩点" :value="sumPoint"></van-cell>
                <van-cell title="总未过科目" :value="offCount"></van-cell>
                <van-cell title="必修未过" :value="offMainCount"></van-cell>
                <van-cell title="选修未过" :value="offOtherCount"></van-cell>
                <van-cell title="总挂科" :value="gkMainCount + gkOtherCount"></van-cell>
                <van-cell title="选修挂科" :value="gkOtherCount"></van-cell>
                <van-cell title="必修挂科" :value="gkMainCount"></van-cell>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {ScoreReport} from "../../../api/sys.zf";

    export default {
        name: "ScoreReport",
        data(){
            return {
                active: 0,
                activeNames: [],
                items: [],
                search: '',
                sumScore: 0,
                sumMainScore: 0,
                sumLearnScore: 0,
                sumMainLearnScore: 0,
                sumPoint: 0,
                sumMainPoint: 0,
                offOtherCount: 0,
                offMainCount: 0,
                offCount: 0,
                gkOtherCount: 0,
                gkMainCount: 0
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

                    // 统计分数
                    this.count()
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
            },
        },
        methods : {
            count(){
                this.items.forEach(item => {
                    if (item[6] === "&nbsp;")
                        item[6] = 0


                    if(item[4] !== '通识教育选修课'){
                        this.sumMainScore += parseFloat(item[8])
                        if(parseFloat(item[8]) >= 60){
                            this.sumMainLearnScore += parseFloat(item[6])
                            this.sumMainPoint += parseFloat(item[7])
                        }
                    }
                    this.sumLearnScore += parseFloat(item[6])
                    if(parseFloat(item[8]) >= 60) {
                        this.sumPoint += parseFloat(item[7])
                        this.sumScore += parseFloat(item[8])
                    }

                    // 未通过
                    if (item[8] < 60 && item[10] < 60 && item[11] < 60){
                        if(item[4] !== '通识教育选修课') {
                            this.offMainCount++
                        } else{
                            this.offOtherCount++
                        }
                        this.offCount++
                    }

                    // 挂科
                    if (item[8] < 60){
                        if(item[4] !== '通识教育选修课')
                         this.gkMainCount++
                            else
                        this.gkOtherCount++
                    }
                })

                this.sumScore = this.sumScore.toFixed(1)
                this.sumMainScore = this.sumMainScore.toFixed(1)
                this.sumPoint = this.sumPoint.toFixed(1)
                this.sumMainPoint = this.sumMainPoint.toFixed(1)
                this.sumMainLearnScore = this.sumMainLearnScore.toFixed(1)
                this.sumLearnScore = this.sumLearnScore.toFixed(1)

            }
        }

    }
</script>

<style scoped>
.value{

}
</style>
