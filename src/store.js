import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use( vuex, axios)

export default new vuex.Store({
    state:{
        posts:[]
    },
    actions:{

        loadPost({commit}){
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                let posts = data.data
                commit('SET_POSTS' ,posts)
                console.log(data.data)
            })
            .catch(error => {
                console.log(error)
            })
        }

    },
    mutations:{ 
        SET_POSTS(state ,posts){
                state.posts = posts
        }

    }
})


