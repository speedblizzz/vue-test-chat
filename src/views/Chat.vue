<template>
  <div class="chat">
    <chat-nav :chats="chats" />
    <span v-if="!selectedChat && !chatId" class="chat__noselect-note"
      >Пожалуйста, выберите чат</span
    >
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { actions } from '../store/names'
import ChatNav from '../components/ChatNav'
export default {
  components: {
    ChatNav
  },
  data() {
    return {
      chatId: undefined
    }
  },
  computed: {
    ...mapState(['chats', 'selectedChat'])
  },
  created() {
    this.chatId = +this.$route.params.id
    this.$store.dispatch(actions.getChatList)
  }
}
</script>

<style lang="scss" scoped>
.chat {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  width: 980px;
  height: 719px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  &__noselect-note {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 680px;
    height: 100%;
    background: #fff;
  }
}
</style>
