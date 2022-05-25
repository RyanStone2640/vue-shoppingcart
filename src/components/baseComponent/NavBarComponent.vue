<template>
  <nav class="headerNav ">
    <h2 class="headerH2"><router-link to="/">Kage Mall</router-link></h2>
    <router-view/>
    <ul class="headerUl listUnstyled">
      <li v-for="(data, index) of navBar">
        <a>{{ data.title }}<i class="fa-solid fa-angle-down"></i></a>
        <div class="showHover">
          <ul class="headerSubUl listUnstyled">
            <li v-for="dataSubtitle of data.subtitle"><a>{{ dataSubtitle }}</a></li>
          </ul>     
        </div>
      </li>  
    </ul>
    <div class="burgerContainer">
      <label for="burger">☰</label>
       <input type="checkbox" id="burger">
       <ul class="listUnstyled">
          <li  v-for="(data, index) of navBar"><a>{{ data.title }}</a></li>
       </ul>
    </div>
    <form class="headerSearch">
      <div class="account">
        <div class="accountInformation">
          <router-link to="/login"><i class="fa-solid fa-circle-user accountLogo"></i><span>登入</span></router-link> 
          <router-link to="/signup" class="enroll"><span>註冊</span></router-link>             
          <router-view/> 
        </div>
        <span class="showShopCarContainer">
          <div class="carValueContainer">
            <i class="fa-solid fa-cart-arrow-down"></i>
            <div class="showShopCarValue">{{ cart.length }}</div>              
          </div>
          <ul class="showShopCarList listUnstyled">
            <SaleItemComponent :parent-items="cart" :is-show="true"></SaleItemComponent>
            <router-link to="/about" class="checkOut" v-if="cart.length > 0">結帳</router-link>
            <router-view/>         
          </ul> 
        </span>             
      </div>        
      <div class="searchContainer">
        <input type="text" name=""><a><i class="fa-solid fa-magnifying-glass"></i></a>
      </div>                
    </form>         
  </nav>  
</template>


<script>
import SaleItemComponent from '@/components/baseComponent/SaleItemComponent.vue'  


export default {
  name: 'NavBarComponent',
  components: {
    SaleItemComponent,
  },    
  data () {
    return {
      // navBar data
      navBar: [
        {
          title: 'PS5專區',
          subtitle: ['PS5主機購買', 'PS5主機預購', 'PS5遊戲片購買']
        }, 
        {
          title: 'PS4專區',
          subtitle: ['PS4主機購買', 'PS4主機預購', 'PS4遊戲片購買']
        }, 
        {
          title: 'NS專區',
          subtitle: ['NS主機購買', 'NS主機預購', 'NS遊戲片購買']
        }
      ],  
    }
  },
  computed:{
    cart(){
      return this.$store.state.cart 
    },    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*headerNav*/
.headerNav{
  background: #20AFEA;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
  /*購物車位置*/
    position: fixed;
    top: 0;
  z-index: 10;
}

/*headerUl*/
.headerUl{
  /*讓menu水平排列*/
  display: flex;
}
.headerUl li{
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
}

/*第二層ul*/
.showHover{
  display: none;
  position: absolute;
  /*li高度+padding*/
  top: 32px;
  z-index: 10;
  /*讓hover不失校*/
  padding-top: 10px;
  margin-top: -10px;
}
.headerSubUl{
  background: white;
  width: 300px;
  height: 200px;
  border: 1px solid black;

}
.headerSubUl li{
  padding-top: 10px;
}

.headerUl li:hover .showHover{
  display: block;
}

/*bugerUl*/
/*正常螢幕寬度不顯示*/
.burgerContainer {
  display: none;
}
.burgerContainer label{
  cursor: pointer;
  display: none;
}
.burgerContainer #burger{
  display: none;
}
.burgerContainer ul{
  position: absolute;
  top: 10vh;
  z-index: 10;
  width: 15%;
  padding: 1%;
  display: none;
  background: #E2D8D8;
}
.burgerContainer li{
  margin: 5%;
}

/*headerSeach*/
.searchContainer{
  border-radius: 20px;
  border: none;
  background:#E4E2E2;
  height: 30px;
  display: flex;
}

.searchContainer input{
  width: 70%;
  height: 100%;
  margin-left: 10%;
  margin-right: 10%;
  border: none;
  background: transparent;
  /*點擊輸入框時候，不會出現框線*/
  outline: none;
}
.searchContainer a{
  margin-right: 10%;
}

/*header headersearch*/
.headerSearch{
  position: relative;
}

/*header account*/
.account{
  position: absolute;
  top: -30px;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.accountLogo{
  color: white;
  font-size: 20px;
}

.accountLogo:hover{
  cursor: pointer;
}


/*header shoppingCar*/
.headerNav .showShopCarContainer{
}
.headerNav .carValueContainer{
  display: flex;
  margin-bottom: 20px;
}
.carValueContainer:hover{
  cursor: pointer;
}

.headerNav .showShopCarContainer:hover .showShopCarList{
  display: block;
}

.headerNav .showShopCarValue{
  width: 30px;
  height: 20px;
  background: white;
  text-align: center;
  border-radius:  10px
}
.headerNav .fa-cart-arrow-down{
  color: white;
}
.headerNav .showShopCarList{
  display: none;
  background: white;
  position: absolute;
  top:  30px;
  right: 0;
  width: 300px;
  max-height: 70vh;
  /*不知為甚麼會被壓在下面*/
  z-index: 10;
  overflow: scroll;
}

/*checkoutbtn*/
.checkOut {
  display: block;
  background: #20AFEA;
  border-radius: 20px;
  width: 30%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .headerUl {
    display: none;
  }
/*  .headerH2{
    display: none;
  }*/
  .headerSearch {
/*    margin-right: auto;
    margin-left: auto;*/
  }
  /*show burgerUl*/
  .burgerContainer{
    display: block;
  }
  .burgerContainer  label{
    display: block;
  }
  .burgerContainer #burger:checked + ul{
    display: block;
  }
} 
</style>