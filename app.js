const app = Vue.createApp({
    // Use template to put in your templated HTML
    // template: '<h1>Hello {{firstName}}</h1>',

    // Input data you want
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'JohnDoe@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },

    // Methods you want to use
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            const userInfo = results[0]
            this.firstName = userInfo.name.first
            this.lastName = userInfo.name.last
            this.email = userInfo.email
            this.gender = userInfo.gender
            this.picture = userInfo.picture.large
        }
    }
})

app.mount("#app")