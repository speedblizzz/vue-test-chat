<template>
  <ul class="message-list" ref="list">
    <message-item
      v-for="message in chatMessages"
      :key="message.id"
      :message="message"
    />
  </ul>
</template>

<script>
import MessageItem from '../components/MessageItem'
export default {
  components: {
    MessageItem
  },
  props: {
    selectedChat: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    chatMessages() {
      if (!this.selectedChat) return []
      return this.selectedChat.parts
    }
  },
  updated() {
    this.scrollChatToBottom()
  },
  mounted() {
    this.scrollChatToBottom()
  },
  methods: {
    scrollChatToBottom() {
      const messageList = this.$refs.list
      if (messageList) messageList.scrollTop = messageList.scrollHeight
    }
  }
}
</script>

<style lang="scss" scoped>
.message-list {
  width: 100%;
  flex-grow: 1;
  margin: 0;
  padding: 30px 16px 5px 39px;
  list-style: none;
  overflow-y: auto;
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
</style>
