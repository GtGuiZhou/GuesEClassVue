<template>
    <div>

    </div>
</template>

<script>
    import crud from '@/components/mixins/crud'

    const module = 'Add'
    export default {
        name: "QaAdd",
        mixins: [crud],
        data() {
            return {
                items: [],
                form: {}
            }
        },
        created() {
            if ('id' in this.$route.params) {
                this.onRead(module, this.form)
            }
            this.onLoadAll(module, this.items)
        },
        methods: {
            submit() {
                this.onAdd(module, this.form, this.items)
            }
        }
    }
</script>

<style scoped>

</style>
