<template>
  <header class="header">
    <NavBarComponent></NavBarComponent>

    <!-- fugure -->
    <figure class="headerFigure">
      <div class="picContainer">
        <button class="preBtn" @click="setShow(show-1)"><i class="fa-solid fa-angle-left "></i></button>
        <transition-group tag="ul" class="imgsContainer listUnstyled" :name="transitionName">
            <li class="page" v-for="(img,index) of imgs" :key="index" v-show="index === show">
                <img :src="img.src" class="objectCover">
            </li>
        </transition-group>
        <button class="nextBtn" @click="setShow(show+1)"><i class="fa-solid fa-angle-right"></i></button>
        <div class="selectCirContainer">
          <ul class="selectCir listUnstyled">
            <li v-for="(img,index) of imgs" :class="{'select': index === show}"></li>
          </ul>
        </div>
      </div>
    </figure>
  </header>
</template>

<script>
import SaleItemComponent from '@/components/baseComponent/SaleItemComponent.vue'
import NavBarComponent from '@/components/baseComponent/NavBarComponent.vue'


let timer
const interval = 3000
export default {
  name: 'HeaderComponent',
  components: {
    SaleItemComponent,
    NavBarComponent
  },  
  data () {
    return {
      // headerFigureDate
      transitionName: 'left-in',
      show: 0,
      imgs: [
        { src: '/imgs/book.jpg' },
        { src: '/imgs/elding.jpg' },
        { src: '/imgs/nssport.jpg' },
        { src: '/imgs/oledns.jpg' },
        { src: '/imgs/salens.jpg' }
      ],
    }
  },
  mounted () {
    timer = setInterval(this.nextShow, interval)
  },
  methods: {
    setShow (index) {
      this.show = index
    },
    nextShow () {
      this.show++
    }
  },
  watch: {
    show (nVal, oVal) {
      if (nVal < 0) {
        this.show = this.imgs.length - 1
      } else if (nVal > this.imgs.length - 1) {
        this.show = 0
      } else {
        if (oVal < 0) this.transitionName = 'left-in'
        else if (oVal > this.imgs.length - 1) this.transitionName = 'right-in'
        else this.transitionName = nVal > oVal ? 'right-in' : 'left-in'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*transiton-group*/
  .right-in-enter{
      left:100%
  }
  .right-in-enter-active,.right-in-leave-active{
      transition: left 0.5s;
  }
  .right-in-enter-to,.right-in-leave{
      left:0%
  }
  .right-in-leave-to{
      left:-100%
  }
  .left-in-enter{
      left:-100%
  }
  .left-in-enter-active,.left-in-leave-active{
      transition: left 0.5s;
  }
  .left-in-enter-to,.left-in-leave{
      left:0%
  }
  .left-in-leave-to{
      left:100%
  }

/*headerFigure*/

.headerFigure{
  margin-top: 10vh;
}
.picContainer{
  overflow: hidden;
  position: relative;
}

.imgsContainer {
  display: flex;
}
.imgsContainer li{
  /*不會縮小寬度*/
  flex-shrink: 0;
  width: 100%;
  height: 100%;
}
.preBtn{
  cursor: pointer;
  position: absolute;
  top:  25%;
  left: 10px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  border: none;
  /*不知道為甚麼會被壓在下面==*/
  z-index: 5;
}
.nextBtn{
  cursor: pointer;
  position: absolute;
  top:  25%;
  right: 10px;
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  border: none; 
}
.picContainer i{
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}


/*selectcircle*/
.selectCirContainer{
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,-50%);
}
.selectCirContainer ul{
  display: flex;
}
.selectCirContainer li{
  border-radius: 50%;
  width: 15px;
  height: 15px;
  margin: 10px;
  background: #D8D8D8;
}

.selectCir .select{
  background: black;
}
</style>
