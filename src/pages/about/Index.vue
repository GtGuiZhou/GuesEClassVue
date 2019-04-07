<template>
    <div >
        <van-nav-bar
                left-arrow
                left-text="返回"
                title="关于"
                @click-left="$router.back(-1)"
        />
        <van-cell>
            <div style="text-align: center;color: pink" @click="onClick()">
                攀登高山，它能使你看的更远
            </div>
        </van-cell>

        <van-cell v-if="show">
            这是一个彩蛋，还未完工
        </van-cell>
        <br>
        <van-cell>
            <img :src="liunian1" @click="preview(liunian1)" width="100%"/>
            <div style="text-align: center">
                啦啦啦，当时的易班工作站独裁团<br>
                他们有萌萌达的指导老师：许沙、霸道总裁站长：渣渣辉、妇女之友and暖暖的副站长：朱哥、钢铁直男副站长：it's me、温柔可爱副站长：我们的大侄女、
                帅气拉风的文案部部长：小涛涛、唱歌好听又活泼的主持部部长：颜雨婷、因为闲的慌加易班但是非常努力认真的肥宅的新媒体部部长：桑大妹子（100%纯爷们）、美丽善良摄影技术MAX++的摄影部部长：阿桂、无形装逼最为致命的公众号运营人：杨智、
                可爱正直和我一样钢铁直男但是比我会照顾人的空军：小东东、我最佩服的人之一超级认真负责的运营部部长：小马哥、一只认真懂事的小可爱的宣传部部长：丽丽、我们美丽大方的外联部部长：玉兰、低调奢华有内涵的诗人文艺部部长：君正、
                耐心又可爱的秘书部部长：郭云。<br/>最后祝愿大家以后的人生美好，Happy Everyday!
            </div>
        </van-cell>
        <br>
        <br>
        <div style="text-align: center">
            <a class="Header-link" href="https://github.com/GtGuiZhou/GuesEclassVue" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
                <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a><br>
            <small style="color: gray">戳一戳就能跳转</small>
            <br>
            <span style="color: gray">本项目已开源，快来fork me!吧</span><br>
            <small style="color: gray">Power By GtGuiZhou</small><br>
            <small style="color: gray">gtguizhou@qq.com</small><br>
            <br>
            <a href="http://blog.guotao.pro/static/confront">To My Blog &nbsp; →</a>
            <br>
            <br>
        </div>

    </div>
</template>

<script>
    import ln1 from '@/assets/liunian1.png'
    import { ImagePreview } from 'vant';
    export default {
        name: "About",
        data() {
            return {
                count: '',
                show: false
            }
        },
        computed : {
          liunian1 () {
              return ln1
          }
        },
        created () {
            this.$dialog.alert({
                title: '提示',
                message: '哈喽～小哥哥or小姐姐，很高心你能来到这，这一个页面是为了留念与我与2014级-2018级共同在贵工程易班工作站学习和工作的同学们而设立的，他们有我的好兄弟、好朋友、以及我的马子们(逃(✿◡‿◡)。在此我非常感谢有他们的亲密陪伴我三年大学时光，有你们我很幸福也很快乐。ps:有彩蛋哦！'
            })
        },
        methods: {
            preview (url) {
                ImagePreview([url]);
            },
            onClick () {
              this.count++
                if (this.count === 4){
                    this.$toast({message:'恭喜你发现彩蛋了哦～',position:'bottom'})
                    this.show = true
                }
            },
            more () {
                this.$toast('还没有做完哦')
                // this.$dialog.confirm({
                //     title: '提示',
                //     message: '哈喽～小哥哥or小姐姐，很高心你能来到这，这一个页面是为了留念与作者同在贵工程易班工作站的2014级-2018级的同学们而设立的，他们有我的好兄弟、好朋友、以及我的马子们(逃(✿◡‿◡)。在此我非常感谢有他们的亲密陪伴我三年大学时光，有你们我很幸福也很快乐。ps:有彩蛋哦！'
                // })
            }
        },
    }
</script>

<style scoped>

</style>
