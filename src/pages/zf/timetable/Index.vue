<template>
    <div >
        <van-nav-bar
                left-arrow
                left-text="返回"
                right-text="更新"
                title="课表"
                @click-left="$router.back(-1)"
                @click-right="$router.push('/zf/update')"
        />
        <van-cell v-if="!items" style="margin-top: 100px;"  @click="$router.push('/zf/update')">
            <div style="text-align: center;color: darkcyan;text-decoration: underline darkcyan">
                <span href="#" @click="$router.push('/zf/update')" >暂无数据,点击跳转更新...</span>
            </div>
        </van-cell>

        <el-table
                v-loading="loading"
                :span-method="arraySpanMethod"
                border
                :data="table">
            <el-table-column
                    width="50"
                    align="center"
                    label="课时"
                    type="index">
            </el-table-column>
            <el-table-column
                    align="center"
                    v-for="(item,key) in week" :key="key"
                    :label="item"
                    >
                <template slot-scope="scope">
                    <span v-html="kcTextReplace(scope.row[item].text)" ></span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import {Table as ElTable,TableColumn as ElTableColumn} from 'element-ui'
    import {TimeTable} from "../../../api/sys.zf"
    export default {
        name: "TimeTable",
        components: {ElTable,ElTableColumn},
        data(){
            return {
                loading: false,
                items: [],
                week: ['周一','周二','周三','周四','周五','周六','周日']
            }
        },
        computed :{
            table (){
                let arr = []
                for (let i = 0;i < 12;i++){
                    let tmp = []
                    for (let j = 0;j < 7;j++){
                        let item = this.items.find(item => {
                            let bg,ed
                            bg = ed = item[3]
                            if (item[3].indexOf(',') > 0){
                                [bg,ed] = item[3].split(',')
                            }
                            return item[2] === this.week[j] && i + 1 <= ed && i + 1 >= bg
                        })
                        if (item) {
                            tmp[this.week[j]] = {
                                text:item[0],
                                kc:  item[1]
                            }
                        }else
                            tmp[this.week[j]] = {
                                text:"",
                                kc:""
                            }
                    }
                    arr[i] = tmp
                }
                return arr
            }
        },
        created() {
            TimeTable().then(
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

                    this.items.splice(0,this.items.length)
                    for (let i in res.time_table){
                        this.items.push(res.time_table[i].match(/(.*?)<br>(.*?)第(.*?)节{第(.*?)-(.*?)周}<br>(.*?)<br>(.*?)/))
                    }
                }
            )
        },
        methods: {
            kcTextReplace(text){
                return text.replace(/第(.*?)节/,'<br>')
            },
            // TODO: 先计算出合并区域，保存在数组中，然后在这里直接查询就行了，要不执行效率太慢了。
            arraySpanMethod({ row, column, rowIndex, columnIndex }) {
                let rowspan = 1, colspan = 1
                if (columnIndex > 0) {
                    columnIndex--
                    let week = this.week[columnIndex]
                    if(row[week].kc.length > 2) {
                        // 本节课与下一节课
                        if (rowIndex > 0 && this.table[rowIndex][week].kc === this.table[rowIndex - 1][week].kc){
                            return [0,0] // 删掉
                        }

                        // 每天第一节课，或者本节课和上一节课不相等
                        if (rowIndex === 0 || this.table[rowIndex][week].kc !== this.table[rowIndex - 1][week].kc) {
                            for (let i = rowIndex + 1; i < 12; i++) {
                                if (this.table[rowIndex][week].kc === this.table[i][week].kc) {
                                    rowspan++ // 计算范围
                                } else {
                                    break
                                }
                            }
                        }
                    }
                }
                return [rowspan,colspan]
            },
        }
    }
</script>

<style scoped>

</style>
