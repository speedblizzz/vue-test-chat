<template>
  <nav class="chat-navbar">
    <chat-nav-header :messagesCount="messagesCount" />
    <chat-nav-list :chats="chats" />
  </nav>
</template>

<script>
import ChatNavHeader from '../components/ChatNavHeader'
import ChatNavList from '../components/ChatNavList'
export default {
  components: {
    ChatNavHeader,
    ChatNavList
  },
  props: {
    chats: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    messagesCount() {
      return this.chats.reduce((count, chat) => {
        return count + chat.parts.length
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-navbar {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 300px;
  height: 100%;
  background-color: #f3f6f8;
  &::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 0;
    bottom: 0;
    display: block;
    width: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
