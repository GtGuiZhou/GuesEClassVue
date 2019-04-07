<template>
    <div>
        <comment-list
                class="fadeInLeft"
                @answer="(username,id) => {active = 'answer';answer_username = username;answer_id = id}"
                v-if="active === 'list'" :module="module"></comment-list>
        <comment-answer
                class="fadeInRight"
                :answer_username="answer_username"
                :module="module"
                :answer_id="answer_id"
                v-if="active === 'answer'"
                @back="active = 'list'"
        ></comment-answer>
    </div>
</template>

<script>
    import CommentList from "./List";
    import CommentAnswer from "./Answer";

    export default {
        components: {CommentAnswer, CommentList},
        name: "CommentIndex",
        props: {
          module: {
              type: String,
              required: true
          }
        },
        data () {
            return {
                answer_id: 0,
                answer_username: '',
                active: 'list'
            }
        }
    }
</script>

<style scoped>
    @-webkit-keyframes fadeInRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
    }

    @-webkit-keyframes fadeInRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .fadeInRight {
        -webkit-animation-name: fadeInRight;
        animation-name: fadeInRight;
    }
</style>
