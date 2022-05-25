<template>
<!--   <div class="container position-absolute top-50 start-50 translate-middle">
    <div class="mb-2">
      <label for="">email</label>
      <input type="text" id="email" class=" form-control" v-model.trim="email">
    </div>
    <div class="mb-2">
      <label for="">password</label>
      <input type="password" id="password" class="form-control" v-model.trim="password">
    </div>      
    <div class="d-grid mt-3">
      <button class="btn btn-primary" id="btn" @click="login()">登入</button>
    </div>    
  </div> -->
  
  <form class="row g-3 was-validated position-absolute top-50 start-50 translate-middle" action="login" method="POST">
    <div>
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" placeholder="example@com" name="email" required>
    </div>

    <div>
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" placeholder="password" name="password" minlength="8"  maxlength="12" required>
    </div>
      <input type="hidden" name="_csrf" value="<%= csrfToken %>">
      <button class="btn btn-primary" type="submit">Login</button>
    </form>
</template>

<script> 
export default {
  name: 'LoginComponent',
  data(){
    return{
      // email:"",
      // password:""
    }
  },
  methods:{
    // login(){
    //   if(this.email == "" || this.password == ""){
    //     alert("請輸入帳號密碼")
    //     return false
    //   }
    //   // todo axios後端
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import'~bootstrap/dist/css/bootstrap.css'  
</style>
