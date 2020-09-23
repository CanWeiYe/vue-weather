<template>
    <div id="maincontainer">
      <img :src="left" :class="left_nav_style" @click="handlePriorClick">
      <img :src="pic_url"
           class="responsable-img">
      <img :src="right" :class="right_nav_style" @click="handleNextClick" >
    </div>
</template>

<script>
  import { getPrecipitationForecast } from '@/api/weather'

  export default {
    name: 'index',
    data(){
      return{
        left_nav_style: 'nav-img',
        right_nav_style: 'nav-img',
        dataArray: [{pic:'',title:''}],
        current_index: 0,
        pic_url: '',
        left_available: require('../../assets/png/left.png'),
        right_available: require('../../assets/png/right.png'),
        right: require('../../assets/png/right.png'),
        left_disabled: require('../../assets/png/left_disabled.png'),
        left: require('../../assets/png/left_disabled.png'),
        right_disabled: require('../../assets/png/right_disabled.png')
      }
    },
    created() {
      getPrecipitationForecast().then( resp => {
          this.dataArray = resp.data.data;
          this.pic_url = this.dataArray[0].pic;
      })
    },
    methods: {
      handleNextClick() {
        if (this.current_index == 2){
            return;
        } else if (this.current_index == 1){
            this.right_nav_style = 'nav-img disabled';
            this.left_nav_style = 'nav-img';
            this.right = this.right_disabled;
            this.left = this.left_available;
            this.pic_url = this.dataArray[2].pic;
            this.current_index++;
        } else {
            this.right_nav_style = 'nav-img';
            this.left_nav_style = 'nav-img';
            this.right = this.right_available;
            this.left = this.left_available;
            this.pic_url = this.dataArray[1].pic;
            this.current_index++;
        }
      },
      handlePriorClick(){
        if (this.current_index == 0){
          return;
        } else if (this.current_index == 1){
          this.right_nav_style = 'nav-img';
          this.left_nav_style = 'nav-img disabled';
          this.left = this.left_disabled;
          this.right = this.right_available;
          this.pic_url = this.dataArray[0].pic;
          this.current_index--;
        } else {
          this.right_nav_style = 'nav-img';
          this.left_nav_style = 'nav-img';
          this.left = this.left_available;
          this.right = this.right_available;
          this.pic_url = this.dataArray[1].pic;
          this.current_index--;
        }
      }
    }
  }
</script>

<style scoped>
#maincontainer{
  margin: 30px auto;
  text-align:center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.responsable-img{
  max-width: 70%;
  height-width: 70%
}
.nav-img{
  margin: 5%;
  max-width: 6%;
  height-width: 6%
}
.nav-img:hover{
  cursor: pointer;
}
.disabled:hover{
  cursor: not-allowed;
}
</style>
