<template>
  <li
    class="message-item"
    :class="{
      'message-item--opposited': isDifferentUser(message.author.id)
    }"
  >
    <p
      class="message-item__text"
      :class="{
        'message-item__text--opposited': isDifferentUser(message.author.id)
      }"
    >
      {{ message.text }}
    </p>
    <p class="message-item__caption">
      <span class="message-item__author">{{ message.author.name }}</span>
      <span class="message-item__date">{{ formatDate(message.created) }}</span>
    </p>
  </li>
</template>

<script>
import { mapState } from 'vuex'
import { formatDateWithDots } from '../utils/helpers'

export default {
  props: {
    message: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    formatDate(date) {
      return formatDateWithDots(date)
    },
    isDifferentUser(userId) {
      return this.user.id !== userId
    }
  }
}
</script>

<style lang="scss" scoped>
.message-item {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  margin-bottom: 20px;
  word-wrap: break-word;
  &--opposited {
    align-items: flex-start;
  }

  &__text {
    max-width: 380px;
    margin: 0;
    padding: 18px 17px 16px 26px;
    font-size: 14px;
    line-height: 141.62%;
    color: #475453;
    background: #e9f5f4;
    border-radius: 8px 8px 0px 8px;
    &--opposited {
      background: #f6f7f9;
      border-radius: 8px 8px 8px 0px;
    }
  }
  &__caption {
    margin: 0;
    margin-top: 9px;
  }
  &__date {
    font-size: 10px;
    line-height: 141.62%;
    color: #b7c0c8;
  }
  &__author {
    display: inline-block;
    margin-right: 12px;
    font-weight: bold;
    font-size: 13px;
    line-height: 141.62%;
    color: #000;
  }
}
</style>
