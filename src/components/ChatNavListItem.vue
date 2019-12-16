<template>
  <li class="chat-navbar__item">
    <router-link
      :to="`/${chat.id}`"
      class="chat-navbar__chat-link"
      :class="{ 'chat-navbar__chat-link--active': isActiveChat(chat.id) }"
      ><h5 class="chat-navbar__chat-title">
        {{ chat.subject }}
      </h5>
      <span
        class="chat-navbar__chat-date"
        :class="{ 'chat-navbar__chat-date--active': isActiveChat(chat.id) }"
      >
        {{ formatCreatedDate(chat.created) }}
      </span>
      <p class="chat-navbar__chat-preview">{{ chat.parts[0].text }}</p>
    </router-link>
  </li>
</template>

<script>
import { formatDateWithMonthName } from '../utils/helpers'

export default {
  props: {
    chat: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    isActiveChat(chatId) {
      const currentChatId = +this.$route.params.id
      return currentChatId === chatId
    },
    formatCreatedDate(date) {
      return formatDateWithMonthName(date)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-navbar {
  &__item {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #e9edf2;
    cursor: pointer;
  }
  &__chat-link {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 21px 20px 23px 21px;
    color: #35383d;
    text-decoration: none;
    border-left: 2px solid #f3f6f8;
    &:hover {
      background-color: #e9edf2;
      border-left: 2px solid #e9edf2;
    }
    &--active {
      border-left: 2px solid #398bff;
      background-color: #fff;
      &:hover {
        background-color: #fff;
        border-left: 2px solid #398bff;
      }
    }
  }
  &__chat-title {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 18px;
    color: #35383d;
  }
  &__chat-date {
    font-size: 10px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #b7c0c8;
    &--active {
      color: #7d8790;
    }
  }
  &__chat-preview {
    display: inline-block;
    width: 100%;
    height: 46px;
    margin: 0;
    font-size: 13px;
    line-height: 20px;
    color: #7d8790;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
