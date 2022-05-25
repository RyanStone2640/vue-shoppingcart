<template>
  <NavBarComponent></NavBarComponent>
  <CartComponent class="cart"></CartComponent>
  <FooterComponent class="footer"></FooterComponent>

</template>


<script>
import NavBarComponent from '@/components/baseComponent/NavBarComponent.vue'  
import CartComponent from '@/components/baseComponent/CartComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  name: 'HomeView',
  components: {
    NavBarComponent,
    CartComponent,
    FooterComponent,
  }
}
</script>

<style type="text/css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka&family=M+PLUS+1&family=Noto+Sans+TC:wght@100;700;900&family=Open+Sans:wght@300&family=Raleway&display=swap');

/*全域CSS*/
*{
  box-sizing: border-box;
    margin: 0;
    padding: 0;
  font-family: 'Fredoka', sans-serif;
  font-family: 'M PLUS 1', sans-serif;
  font-family: 'Noto Sans TC', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Raleway', sans-serif;    
}

a, a:link{
    color: #565597;
    text-decoration: none;
   /* color: white;*/
   cursor: pointer;
}
a:hover{
  color: black;
}       

/*共用css*/   
.listUnstyled{
  list-style: none;
    padding:0;
    margin:0;

} 
.objectCover{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hoverToBigger:hover{
  box-shadow:3px 3px 12px black;
   transition: 0.5s;
} 
.footer{
  /*position: absolute;*/
  /*bottom: 0;*/
  width: 100%;
}
</style>
