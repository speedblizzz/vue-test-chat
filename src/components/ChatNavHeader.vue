<template>
  <header class="chat-navbar__header">
    <h4 class="chat-navbar__title">Сообщения</h4>
    <span class="chat-navbar__messages-count">{{ messagesCount }}</span>
  </header>
</template>

<script>
export default {
  props: {
    messagesCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-navbar {
  &__header {
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 60px;
    padding: 24px 20px 16px 20px;
    border-bottom: 1px solid #e9edf2;
  }
  &__messages-count {
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    color: #d2d8de;
  }
  &__title {
    margin: 0;
    margin-right: 10px;
    font-size: 14px;
    font-weight: normal;
    line-height: 18px;
    color: #656b77;
  }
}
</style>
