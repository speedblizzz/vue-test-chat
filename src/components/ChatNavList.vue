<template>
  <ul class="chat-navbar__list">
    <chat-nav-list-item v-for="chat in chats" :chat="chat" :key="chat.id" />
  </ul>
</template>

<script>
import ChatNavListItem from '../components/ChatNavListItem'
export default {
  components: {
    ChatNavListItem
  },
  props: {
    chats: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-navbar {
  &__list {
    flex-grow: 1;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    list-style: none;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgba(57, 139, 255, 0.5);
      border: 0 solid transparent;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-track {
      background-color: initial;
    }
  }
}
</style>
