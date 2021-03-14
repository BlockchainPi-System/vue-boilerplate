<template>
  <div>
    <form>
      <input v-model="email" type="text" name="email" placeholder="Email">
      <br>
      <input v-model="password" type="text" name="password" placeholder="Password">
    </form>
    <button @click="onSubmit">Login</button>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      console.log(`Email: ${this.email}, Password: ${this.password}`)
      axios.post('url-to-your-api-server', {
        email: this.email,
        password: this.password
      }).then(response => {
        alert('Successful login')
      })
    }
  }
})
</script>

<style>
  input {
    margin-bottom: 20px
  }
</style>
