const constraints = {
    firstname1: {
        presence: true,
    },
    lastname1: {
        presence: true,
    },
    follower1: {
        presence: true,
        numericality: {
            lessThan: 9999999
        }
    },
    email:{
        presence: true,
        email:true
    }

}
    const app = Vue.createApp({
        data() {
            return {
                firstname: 'Patsakorn',
                lastname: 'Janthawong',
                firstname1: null,
                lastname1: null,
                age: null,
                msg: 'Hello, Vue3',
                Article:99,
                image: './images/mark.jpg',
                follower: 9999,
                follower1:null,
                rating: 9.9,
                job: 'Associate developer',
                errors: null,
                email:null,


            }
        },methods: {
            checkForm(e){
                this.errors = validate({firstname1: this.firstname1,
                                        lastname1: this.lastname1,
                                        follower1: this.follower1,
                                        email:this.email},
                                        constraints)
                if(this.errors){e.preventDefault();  }
                    
                else{
                    alert("Your profile is updatedsuccessfully.")
                }
            }
        }

    })
mountedApp = app.mount('#app')