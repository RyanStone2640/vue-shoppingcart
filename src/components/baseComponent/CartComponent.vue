<template>
  <div class="checkOutUlContainer">
    <ul class="checkOutUl listUnstyled">     
      <li class="checkOutli" v-for="(data,index) of cart">
        <img :src="data.imgUrl" class="objectCover" style="width: 10%;">
          <div class="text">{{ data.title }}</div>
          <div class="price">{{ data.totalPrice }}</div>
          <div @click="removeCart(data)">
            <i class="fa-solid fa-xmark"></i>            
          </div>
          <div class="goodNumber">
           <button  @click="removeNumber(data)">
             <i class="fa-solid fa-minus"></i>
           </button> 
           <div>{{ data.number }}</div>
           <button @click="addNumber(data)">
             <i class="fa-solid fa-plus plus"></i>
           </button>
          </div>
      </li>                             
    </ul>
    <div class="buyGoodContainer">
      <div class="totalPrice">小記: {{  totalPrice }}</div>
      <button class="btn">下一步</button>  
    </div>    
  </div>
</template>

<script>
export default {
  name: 'CartComponent',
  data(){
    return{
    }
  },
  computed: {
    cart(){
      return this.$store.state.cart 
    },
    totalPrice () {
      return this.$store.getters.totalPrice
    }
  },  
  methods:{
    removeCart(salItem){
      for(let i = 0; i <= this.cart.length - 1; i++){
        if(this.cart[i].id == salItem.id){
          this.$store.commit('removeImg', i)
        }
      }   
    },
    addNumber(salItem){
      this.$store.commit('addNum', salItem)
      this.$store.commit('addPrice',salItem)
    },
    removeNumber(salItem){
      this.$store.commit('removeNum', salItem)
      this.$store.commit('addPrice',salItem)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*main*/
.checkOutUlContainer{
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  background: white;
  border: 1px solid #F8F8F8;
  background: #F0F0F0;  
}

.checkOutUl{
  display: flex;
  flex-direction: column;
}
.checkOutUl  .checkOutli{
  display: flex;
  justify-content:  space-between;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #F8F8F8;
  background: white;
  position: relative;
}
.checkOutli .price{
  /*讓價格位於右邊底部*/
  position: absolute;
  right: 0;
  bottom: 10px;
}
.fa-xmark{
  cursor: pointer;
}
.fa-xmark:hover {
  color: red;
}
.checkOutli .goodNumber{
  /*位於左邊底下*/
  position: absolute;
  bottom: 0;
  padding-left: 20px;
  display: flex;
}

.buyGoodContainer{
  position: relative;
}
.totalPrice{
  text-align: center;
  height: 5vh;
}
.btn{
  position: absolute;
  right: 0;
  border: none;
  width: 20%;
  height: 5vh;
  background: #FF4444;
  border-radius: 5px;
  cursor: pointer;

}
</style>
