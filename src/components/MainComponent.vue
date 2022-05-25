<template>
  <main class="main">
    <section class="section1">
      <!-- fugure1 -->
      <figure class="mainFigure">
        <div class="mainPicContainer">
          <a><img src="/imgs/pokemonbdsp.jpg"  class="objectCover" alt=""></a>
          <a><img src="/imgs/nsgamesale.jpg" class="objectCover" alt=""></a>
        </div>
      </figure>
      <!-- saletage -->
      <h2 class="saleTag">⚡主機超值加購組⚡4/30止⚡</h2>
      <!-- figure2 -->
      <figure class="mainFigure">
        <ul class="listUnstyled gamesUl">
          <SaleItemComponent :parent-items="saleItems.slice(0, 2)"></SaleItemComponent> 
        </ul> 
      </figure> 
      <!-- figure3 -->
      <figure class="mainFigure">
        <div class="mainPicContainer">
          <a><img src="imgs/Shin-chan.jpg" class="objectCover" alt=""></a>
        </div>
      </figure>     
    </section>  

    <section class="section2">
      <!-- saletage2 -->
      <h2 class="saleTag">✨熱銷商品✨</h2>
      <ul class="listUnstyled gamesUl">
        <SaleItemComponent :parent-items="saleItems.slice(2)"></SaleItemComponent>
      </ul> 
    </section>
  </main>
</template>

<script>
import SaleItemComponent from '@/components/baseComponent/SaleItemComponent.vue'
import axios from "axios"

export default {
  name: 'MainComponent',
  components: {
    SaleItemComponent,
  },
  data(){
    return{
      saleItems:[
        {
          title: '【超值加購組】【NS】Nintendo Switch OLED 白主機 加價購自由配 (電力加強版台灣公司貨)【 即日起至4/30】',
          imgUrl: '/imgs/oledns01.jpg',
          price: 'NT$10,480',
          salePrice: 'NT$10,280',
          id: 0
        },
        {
          title: '【超值加購組】【NS】Nintendo Switch  紅藍主機 加價購自由配 (電力加強版台灣公司貨)【 即日起至4/30】',
          imgUrl: '/imgs//02.jpg',
          price: 'NT$9,780',
          salePrice: 'NT$8,780', 
          id: 1         
        },
        {
          title: '【NS】星之卡比 探索發現《中文版》（首批獨家提袋特典',
          imgUrl: 'imgs/kirby.jpg',
          price: 'NT$1,690',
          salePrice: 'NT$1,590', 
          id: 2         
        },
        {
          title: '【NS】寶可夢傳說 阿爾宙斯《中文版》（無首批特典 Ga-Ole卡匣',
          imgUrl: 'imgs/Arceus.jpg',
          price: 'NT$1,690',
          salePrice: 'NT$1,590', 
          id: 3         
        },
        {
          title: '【NS】瑪利歐派對 超級巨星《中文版》',
          imgUrl: 'imgs/marioParty.jpg',
          price: 'NT$1,690',
          salePrice: 'NT$1,590', 
          id: 4         
        }, 
        {
          title: '【NS】陸行鳥賽車 巧可啵 GP 大賽車',
          imgUrl: 'imgs/car.jpg',
          price: 'NT$1,390',
          salePrice: 'NT$1,390', 
          id: 5         
        }, 
        {
          title: '【PS4】艾爾登法環ELDEN RING《中文版》',
          imgUrl: 'imgs/eldenring.jpg',
          price: 'NT$1,790',
          salePrice: 'NT$1,790', 
          id: 6         
        },      
        {
          title: '【PS5】地平線：西域禁地《中文版》',
          imgUrl: 'imgs/horizen.jpg',
          price: 'NT$1,990',
          salePrice: 'NT$1,990', 
          id: 7         
        },   
        {
          title: '【PS5】鬼線：東京 GhostWire:Tokyo《中文版》',
          imgUrl: 'imgs/ghostwire.jpg',
          price: 'NT$1,790',
          salePrice: 'NT$1,790', 
          id: 8         
        },        
        {
          title: '【PS5】秘境探險：盜賊傳奇合輯《中文版》',
          imgUrl: 'imgs/unzharted.jpg',
          price: 'NT$1,490',
          salePrice: 'NT$1,490', 
          id: 9         
        }
      ]
    }
  },
  // mounted(){
  //   axios
  //   .get('C:/Users/88695/Desktop/fakeDate.json')
  //   .then((res)=>{
  //     return console.log(res);
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.main{
  margin-bottom: 50px;
}
/*section1*/
.section1{
  width: 90%;
  margin: auto;
}
/*figure1*/
.mainPicContainer{
  /*垂直排列*/
  display: flex;
  flex-direction: column;
}
.mainPicContainer img{
  padding-top: 10px;
}

/*saleTag*/
.saleTag{
  width: 100%;
  padding-top: 10px;
  text-align: center;
}


/*section2*/
.section2{
  width: 90%;
  margin: auto;
}
.gamesUl{
  display: flex;
  flex-wrap: wrap;
}
.gamesUl li{
  width: 25%;
}

.mainFigure li{
  width: 50%;
}

@media screen and (max-width: 768px){
  .gamesUl li{
    width: 50%
  }
}

@media screen and (max-width: 576px){
  .gamesUl li{
    width: 100%
  }
}
</style>
