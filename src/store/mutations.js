export default {
    endChange (state, city) {
        state.city = city           
        try{
            localStorage.city = city
        } catch (e) {}
    },
    getUser: (state, data) => {
        // 把用户名存起来
        state.user = data
        window.sessionStorage.setItem('user', data)
      },
      loginOut: (state) => {
        // 登出的时候要清除用户名
        state.user = null
        window.sessionStorage.removeItem('user')
      }

}

