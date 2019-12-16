import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, actions } from './names'
import { formatDateforCreate } from '../utils/helpers'
import serverFakeData from '../utils/serverData'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats: [],
    selectedChat: undefined,
    user: {
      id: 100,
      name: 'Пётр'
    }
  },
  mutations: {
    [mutations.SET_CHAT_LIST]: (state, payload) => {
      state.chats = payload
    },
    [mutations.SET_SELECTED_CHAT]: (state, payload) => {
      if (!payload) return
      state.selectedChat = payload
    },
    [mutations.UPDATE_CHAT_LIST]: (state, payload) => {
      const newChatList = state.chats.map(chat => {
        if (chat.id === payload.id) return payload
        return chat
      })
      state.chats = newChatList
      localStorage.setItem('testChats', JSON.stringify(newChatList))
    }
  },
  actions: {
    [actions.getChatList]: ({ commit }) => {
      setTimeout(() => {
        const localChatsData = localStorage.getItem('testChats')
        const data = localChatsData
          ? JSON.parse(localChatsData)
          : serverFakeData
        if (!localChatsData) {
          localStorage.setItem('testChats', JSON.stringify(data))
        }
        commit(mutations.SET_CHAT_LIST, data)
      }, 300)
    },
    [actions.getSelectedChat]: ({ commit }, chatId) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const localChatsData = localStorage.getItem('testChats')
          const data = localChatsData
            ? JSON.parse(localChatsData)
            : serverFakeData
          const selectedChat = data.find(chat => chat.id === chatId)
          commit(mutations.SET_SELECTED_CHAT, selectedChat)
          resolve()
        }, 200)
      })
    },
    [actions.sendNewMessage]: ({ state, commit }, newMessage) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const chatMessages = [...state.selectedChat.parts]
          const newChat = { ...state.selectedChat }
          const newMessageObject = {
            id: chatMessages[chatMessages.length - 1].id + 1,
            author: { ...state.user },
            text: newMessage,
            created: formatDateforCreate()
          }
          chatMessages.push(newMessageObject)
          newChat.parts = chatMessages

          commit(mutations.SET_SELECTED_CHAT, newChat)
          commit(mutations.UPDATE_CHAT_LIST, newChat)
          resolve()
        }, 100)
      })
    }
  }
})
