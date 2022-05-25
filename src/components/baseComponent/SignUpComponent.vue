<template> 
<!--   <div class="container position-absolute top-50 start-50 translate-middle">  
  <div class="mb-2">
    <label for="">email</label>
    <input type="text" id="email" class=" form-control" v-model="email">
  </div>
  <div class="mb-2">
    <label for="">password</label>
    <input type="password" id="password" class="form-control" v-model="password">
  </div>      
  <div class="d-grid mt-3">
      <button class="btn btn-primary" id="btn"  @click="signup()">註冊</button>
  </div>
  </div> -->
  <form class="row g-3 was-validated position-absolute top-50 start-50 translate-middle" action="/signup" method="POST">
    <div>
      <label for="userName" class="form-label">User Name</label>
      <input type="text" class="form-control" id="UserName" placeholder="User Name" name="userName" maxlength="20" required>
      <div class="invalid-feedback">
          顯示名稱最長不得超過 20 字。
      </div>
    </div>

    <div>
      <label for="email" class="form-label">Email</label>
      <input type="email" class="form-control" id="email" placeholder="example@com" name="email" required>
      <div class="invalid-feedback">
        請輸入合法的電子郵件地址。
      </div>
    </div>

    <div>
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" placeholder="password" name="password" minlength="8"  maxlength="12" required>
      <div class="invalid-feedback">
          請輸入 8 ~ 12 位數的密碼。
      </div>
    </div>
      <input type="hidden" name="_csrf" value="<%= csrfToken %>">
      <button class="btn btn-primary" type="submit">Signup</button>
    </form>  
</template>

<script> 
export default {
  name: 'SignUpComponent',  
  data(){
    return{
      // email:"",
      // password:""
    }
  },
  methods:{
    // signup(){
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
