import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 三个模块
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'
// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
export default createStore({

  modules: {
    cart,
    category,
    user
  },
  // 配置插件
  plugins: [createPersistedState({
    // 本地存储名字
    key: 'erabbit-pc-vue-project',
    // 指定需要存储的模块
    paths: ['user', 'cart']
  })]
})
