<template>
  <footer class="footer">
    <ul class="listUnstyled footerUl">
      <li v-for="(footerData, index) of footerDatas">
        {{ footerData.title }}
        <ul class="listUnstyled" v-for="footerSubtitle of footerData.subtitle">
          <li><a>{{ footerSubtitle }}</a></li>
        </ul>
      </li>
    </ul>
      <button class="goTop"><i class="fa-solid fa-angle-up"></i></button>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data(){
    return{
      footerDatas: [
        {
          title: '關於我們',
          subtitle: ['商店簡介', '門市資訊', '隱私權及網站使用條款']
        },
        {
          title: '購物說明',
          subtitle: ['付款方式', '運送方式', '退換貨方式']
        },
        {
          title: '客服資訊',
          subtitle: ['客服留言', '常見問題', '會員權益聲明', '聯絡我們']
        },
        {
          title: '官方APP',
        },        
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  margin-top: 10vh;
}
.footerUl{
  padding: 20px;
  border-top:1px solid #EDEDED ;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (max-width: 768px){
  .footerUl li{
    width: 50%;
    margin-top: 10px;
  }
}


/*goTop*/
.goTop{
  /*button style*/

  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  /*default dispaly*/
  display: none;
  position: fixed;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  border: none;
}

.goTop.show{
  display: inline ;

}   
.goTop i{
  font-size: 2rem;
  color: white;
}

</style>
