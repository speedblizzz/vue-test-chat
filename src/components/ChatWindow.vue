<template>
  <section class="chat-window">
    <message-list
      v-if="selectedChat"
      ref="messageList"
      :selectedChat="selectedChat"
    />
    <message-form
      v-if="selectedChat"
      :loading="loading"
      @submit="sendNewMessage"
    />
    <message-preloader v-if="loading" />
    <span class="chat-window__notfound-note" v-if="isChatNotFound"
      >Чат не найден</span
    >
  </section>
</template>

<script>
import MessageList from '../components/MessageList'
import MessageForm from '../components/MessageForm'
import MessagePreloader from '../components/MessagePreloader'
import { actions } from '../store/names'
import { mapState } from 'vuex'
export default {
  components: {
    MessageList,
    MessageForm,
    MessagePreloader
  },
  data() {
    return {
      loading: true
    }
  },
  props: {
    chats: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    async $route(val) {
      this.loading = true
      const chatId = +val.params.id
      await this.$store.dispatch(actions.getSelectedChat, chatId)
      this.loading = false
    }
  },
  computed: {
    ...mapState(['selectedChat']),
    isChatNotFound() {
      return !this.selectedChat && !this.loading
    }
  },
  async created() {
    const chatId = +this.$route.params.id
    await this.$store.dispatch(actions.getSelectedChat, chatId)
    this.loading = false
  },
  methods: {
    async sendNewMessage(newMessage) {
      this.loading = true
      await this.$store.dispatch(actions.sendNewMessage, newMessage)
      const messageList = this.$refs.messageList.$el
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-window {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 680px;
  height: 100%;
  background: #ffffff;
  &__notfound-note {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
