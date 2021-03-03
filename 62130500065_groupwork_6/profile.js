    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                firstname: 'Patsakorn',
                lastname: 'Janthawong',
                Article:99,
                image: './images/mark.jpg',
                follower: 9999,
                rating: 9.9,
                job: 'Associate developer'


            }
        }

    }
mountedApp = Vue.createApp(app).mount('#app')