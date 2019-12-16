<template>
  <form class="message-form" @submit.prevent="submit">
    <input
      type="text"
      ref="messageInput"
      v-model="newMessage"
      class="message-form__input"
      placeholder="Введите текст..."
    />
    <button class="message-form__btn" :disabled="loading"></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newMessage: ''
    }
  },
  props: {
    loading: Boolean
  },
  methods: {
    submit() {
      if (this.loading) return
      const newMessage = this.newMessage.trim()
      if (newMessage.length === 0) {
        this.newMessage = ''
        return
      }

      this.$emit('submit', this.newMessage)
      this.newMessage = ''
      this.$refs.messageInput.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.message-form {
  position: relative;
  width: 100%;
  height: 80px;
  border-top: 1px solid #e9edf2;
  &__input {
    width: 100%;
    min-height: 79px;
    padding: 29px 113px 30px 33px;
    font-family: 'TT Norms', sans-serif;
    font-size: 14px;
    color: #7d8790;
    line-height: 141.62%;
    border: none;
    outline: none;
  }
  &__btn {
    position: absolute;
    right: 0;
    top: -1px;
    display: block;
    width: 80px;
    height: 80px;
    background-color: #398bff;
    background-image: url('../assets/arrow.svg');
    background-repeat: no-repeat;
    background-position: 55% 50%;
    background-size: 22px 18px;
    border: none;
    cursor: pointer;
  }
}
</style>
