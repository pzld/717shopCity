import Vue from 'vue';
import axios from 'axios';

let httpInstance = axios.create({
    baseUrl: 'http://localhost:3000'
})

axios.interceptors.request.use((config) => {
  return config
}, (err) => {
  return Promise.reject(err)
})

axios.interceptors.response.use((response) => {
  if (response.status === 200) {
    return response.data
  } else {
    return response
  }
}, (err) => {
  return Promise.reject(err)
})

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', {
        value: httpInstance
        })
    }
}
