<template>
    <div>
        <van-cell>
            <strong style="font-size: 1.7em">视频</strong>
        </van-cell>
        <van-search
                v-model="search"
                placeholder="请输入搜索关键词"
                show-action
                @focus="showTag = true"
                @search="onSearch"

        />
        <van-cell v-if="showTag">
            <van-tag
                    plain
                    @click="search = tag"
                    color="rgba(144,147,153,.2)"
                    v-for="(tag,index) in tags" :key="index"
            >
                <span style="color: #909399">{{tag}}</span>
            </van-tag>
        </van-cell>
        <div
                v-else
                v-loading="crudLoading">
            <video-card
                    v-for="(item,index) in items" :key="index"
                    :id="item.id"
                    :desc_text="item.desc_text"
                    :title="item.title"
                    :cover_url="item.cover_url"
            ></video-card>
        </div>
    </div>
</template>

<script>
    import VideoCard from "./Card";
    import {TagList} from "../../api/sys.video";

    export default {
        name: "VideoIndex",
        components: {VideoCard},
        data() {
            return {
                showTag: false,
                search: '',
                tags: [],
                items: []
            }
        },
        created() {
            this.onLoadAll('video', this.items)
            TagList().then(
                res => {
                    this.tags = res
                }
            )
        },
        methods: {
            onSearch() {

            }
        }
    }
</script>

<style scoped>

</style>
