<template>
    <div style="width: 100px;height: 100px;margin: 0 5px">
        <img :src="iconFile" style="width: 100%;height: 100%">
    </div>
</template>

<script>
    import icon from './file.svg'
    export default {
        name: "GtUploadItem",
        props: {
          file: {
              required: true,
              type: File
          }
        },
        data() {
            return {
                icon
            }
        },
        computed: {
            iconFile () {
                console.log(this.file)
                // if (this.file.type.indexOf('image') >= 0)
                //     return this.file
                // else
                    return icon
            }
        },
        methods: {
            submit() {

            }
        }
    }
</script>

<style scoped>

</style>
