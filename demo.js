const HelloVueApp = {
    data() {
        return {
            message:'hello Vue!!'
        }
    }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')