<template>
    <li class="hoverToBigger" v-for="(salItem,index) of parentItems">
      <div>
        <a>
          <div class="mainPic">
            <img :src="salItem.imgUrl" class="objectCover" alt="">
            <div class="goodDescription">
              <div>{{ salItem.title }}</div>
              <div class="priceIcon">
                <div class="price">
                  <div class="del">{{ salItem.price }}</div>
                  <div class="red">{{ salItem.salePrice }}</div>
                </div>
                <div class="icons">
                  <!-- <span @click="toggleFavorite(salItem.id)"><i class="fa-regular fa-heart" :class="{'fa-solid': true}"></i></span> -->
                  <span @click="show(salItem.id)"><i class="fa-regular fa-heart" :class="{'fa-solid': salItem.id == selected}"></i></span>
                  <template v-if="isShow">
                    <span @click="removeCart(salItem)"><i class='fa-solid fa-trash'></i></span>
                  </template>  
                  <template v-else>
                    <span @click="addCart(salItem)"><i class="fa-solid fa-cart-shopping"></i></span>
                   </template>  
                </div>                    
              </div>              
            </div>
          </div>                  
        </a>
      </div>
    </li>
</template>

<script>
export default {
  name: 'saleItemComponent',
  props: ['parentItems', 'isShow'],
  data(){
    return{
      selected:""
    }
  },
  computed:{
    cart(){
      return this.$store.state.cart 
    },  
    isFavorite(){
      return this.$store.state.isFavorite
    }
  },
  methods:{
    addCart(salItem){

      // //檢查是否有重複點擊shopcart，有重複數字就退出functuin
      for(let i = 0; i <= this.cart.length - 1; i++){
        if(this.cart[i].id === salItem.id){
          alert("已經加入購物車了")
          return false;
        }
      }   
      // 增加number到salitem Object
      salItem["number"] = 1
      salItem["totalPrice"] = salItem.salePrice
      this.$store.commit('addImg', salItem)
    },
    removeCart(salItem){
      for(let i = 0; i <= this.cart.length - 1; i++){
        if(this.cart[i].id === salItem.id){
          this.$store.commit('removeImg', i)
        }
      }   
    }, 
    toggleFavorite(id){
      this.$store.commit('favoriteStatus', 
      {
       id, 
       isFavorite: true
      })
      for(let i = 0; i <= this.isFavorite.length - 1; i++){
        if(this.isFavorite[i].id === id){
          this.select = this.isFavorite[i].id
        }
      }          
    },
    show(id){
      this.selected = id;
      console.log(this.selected)
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainPic{
  margin: 20px;
  position: relative;
}
.priceIcon{
  display: flex;
  justify-content: space-between;
}
.price .del{
  font-size: 0.8rem;
  text-decoration:line-through
}
.price .red{
  color: red;
}

.isHide{
  display: none;
}

</style>
