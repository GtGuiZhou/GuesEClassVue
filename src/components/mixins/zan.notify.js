export default {
  methods: {
    successNotify (message,title = '成功') {
      this.$toast({
        title: title,
        message: message,
        type: 'success'
      });
    },
    warningNotify (message,title = '警告') {
      this.$toast({
        title: title,
        message: message,
        type: 'warning',
        position: 'bottom'
      });
    },
    infoNotify (message,title = '信息') {
      this.$toast({
        title: title,
        message: message,
        type: 'info',
        position: 'bottom'
      });
    },
    errorNotify (message,title = '错误') {
      this.$toast({
        title: title,
        message: message,
        type: 'error',
        position: 'bottom'
      });
    }
  }
}
