<template>
    <div>
        <comment-list
                class="fadeInLeft"
                :module_id="module_id"
                @answer="(username,id) => {active = 'answer';answer_username = username;answer_id = id}"
                v-if="active === 'list'" :module="module"></comment-list>
        <comment-answer
                class="fadeInRight"
                :answer_username="answer_username"
                :module="module"
                :answer_id="answer_id"
                :module_id="module_id"
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
            },
            module_id: {
                type: Number,
            }
        },
        data() {
            return {
                answer_id: 0,
                answer_username: '',
                active: 'list'
            }
        }
    }
</script>

<style scoped>

</style>
