import { defineStore } from "pinia";
import { ref } from "vue";


// 实现token setToken removeToken

export const useTokenStore = defineStore('token-user',() => {
    const token = ref('')
    const setToken = (newValue) => {
        token.value = newValue
    }
    const removeToken = () => {
        token.value = ''
    }

    return {
        token,
        setToken,
        removeToken
    }
})