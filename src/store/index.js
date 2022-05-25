import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
  state: {
    //設置屬性       
    cart: [],
    isFavorite: []
  },
  getters: {
    // 從cart延伸出總計資料
    totalPrice:((state)=>{
      let sum = 0
      state.cart.forEach(function(item, index){
        // 字串轉arr
        let priceArr = item.totalPrice.split('');

        priceArr.forEach(function(str, index){
          // 將NAN刪除
          if(isNaN(Number(str))) {
            priceArr.splice(index, 1);
          }
          // 再做一次，防止有非數字元素沒有被刪除
          priceArr.forEach(function(str, index){
            // 將NAN刪除
            if(isNaN(Number(str))) {
              priceArr.splice(index, 1);
            }
          })          
        })

        // priceArr先變成字串再變成數字==，然後加總
         sum = sum + Number(priceArr.join(''));       
      })
      return sum     
    })
  },
  // 更動cart資料的function
  mutations: {
    addImg: ((state, data)=>{
      return state.cart.push(data)
    }),
    removeImg: ((state, data)=>{
      return state.cart.splice(data,1);
    }),
    addNum: ((state, data)=>{
      state.cart.forEach(function(item, index){
        if(item === data){
          if(item.number < 5){
            item.number ++  
          }
          else{
            alert("最多只能買5樣商品!")
            return false
          }
        }
      })
      return state.cart
    }),
    removeNum: ((state, data)=>{
      state.cart.forEach(function(item, index){
        if(item === data){
          if(item.number >1 ){
            item.number --  
          }
        }
      })
      return state.cart
    }),
    addPrice:((state, data)=>{
      state.cart.forEach(function(item, index){
        if(item === data){
          // 字串轉arr
          let priceArr = item.salePrice.split('');

          // 將文字字串更改為數字陣列
          priceArr.forEach(function(str, index){
            // 將NAN刪除
            if(isNaN(Number(str))) {
              priceArr.splice(index, 1);
            }
            // 再做一次，防止有非數字元素沒有被刪除
            priceArr.forEach(function(str, index){
              // 將NAN刪除
              if(isNaN(Number(str))) {
                priceArr.splice(index, 1);
              }
            })          
          })    
          item.totalPrice = "NT$" + Number(priceArr.join(''))* item.number     
           
        }
      })
      return state.cart            
    }),
    favoriteStatus:((state, data)=>{
      for(let i = 0; i <= state.isFavorite.length - 1; i++){
        if(state.isFavorite[i].id == data.id){
           state.isFavorite[i].isFavorite = !state.isFavorite[i].isFavorite
           return false
        }
      }      
      return state.isFavorite.push(data);
    })
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
