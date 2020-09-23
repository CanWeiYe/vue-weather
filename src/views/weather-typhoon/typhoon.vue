<template>
    <div class="typhoon-container" :style="clientStyle">
      <iframe src="http://typhoon.weather.com.cn/gis/typhoon_m.shtml"
              style="width: 100%;height: 100%"
              v-show="true"></iframe>
    </div>
</template>

<script>
  export default {
    name: 'typhoon',
    data() {
      return{
        clientStyle:{
          height: document.body.clientHeight + 'px'
        }
      }
    }
  }
</script>

<style scoped>
  .typhoon-container{
    /*height: 600px;*/
  }
  iframe{
    border: none;
  }
</style>
