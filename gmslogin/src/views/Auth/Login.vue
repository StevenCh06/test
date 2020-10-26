<template>
    <div class="container mt-50" >
        <div class="columns">
            <div class="column is-6 is-offset-3">
                <h3 class="title is-3"> Iniciar Sesion en G.M.S </h3>                           
                <form action="#" @submit.prevent="login">  
                   

                    <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="e.g. correoelectronico@gmail.com" v-model="email">
                    </div>
                    </div>

                    <div class="field">
                    <label class="label">Contraseña</label>
                    <div class="control">
                        <input class="input" type="password" v-model="password" >
                    </div>
                    </div>

                    <button outlined type="submit" class="button is-primary"> Iniciar Sesion </button>

                </form>   

                <div class="notification is-danger mt-10" v-if="error">
                    {{error}}
                </div>              

            </div>
        </div>
    </div>    
</template>

<script>
import '@/firebase/init'
import firebase from 'firebase'

export default {
    data(){
        return {                  
            email: '',
            password:'',
            error: '',
        }
    },

    name:'Login',
    methods: {
        login() {
            this.error = ''
           if( this.email && this.password ){
               firebase.auth().signInWithEmailAndPassword(this.email, this.password)
               .then(user => {
                    this.$router.push({ name: '/dashboard'})
                    console.log(user)
                    this.$router.push({ name:'dashboard' })
                     this.$router.push({ name:'Dashboard' })

               }).catch(err => {
                   this.error = err.message
               })
               
           }else{
            this.error = 'Todos los campos son requeridos'
           }
        },
    }
}
</script>