<template>
  <div class="map-container" v-show="load_completed">
    <el-scrollbar
      wrapClass="scrollbar-wrap"
      style="height:100%"
      ref="scrollbarContainer">
      <div>
        <baidu-map class="bm"
                   ak="czDWvc2K2CMKq347rWCAqhEuYG1fGV8n"
                   :center="center"
                   :zoom="zoom"
                   :dragging="true"
                   :scroll-wheel-zoom="true"
                   @ready="handler"
                   >

          <div v-for="item of alarmData">
            <bm-marker :position="item.location"  @click="infoWindowOpen(item)">
              <bm-info-window :title="item.alarm_type+item.alarm_level+'预警'" :position="item.location" :show="item.show" @open="infoWindowOpen(item)" @close="infoWindowClose(item)">
                <img :src="baseImgUrl+weatherMap[item.alarm_type]+'_'+colorMap[item.alarm_level]+'.jpg'">
                <p v-text="item.alarm_content"></p>
              </bm-info-window>
            </bm-marker>
          </div>
          <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
          <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                          :showAddressBar="true"
                          :autoLocation="true"></bm-geolocation>
        </baidu-map>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>

  import baiduMap from 'vue-baidu-map/components/map/Map.vue'
  import bmNavigation from 'vue-baidu-map/components/controls/Navigation'
  import bmGeolocation from 'vue-baidu-map/components/controls/Geolocation'
  import bmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'
  import bmMarker from 'vue-baidu-map/components/overlays/Marker'
  import {getAlarmData} from '@/api/weather'
  import {baseUrl} from '@/api/weather'
  import NProgress from 'nprogress'

  export default {
    name: 'index',
    components: {
      baiduMap,bmNavigation,bmGeolocation,bmInfoWindow,bmMarker
    },
    data() {
      return {
        center: { lng: 0, lat: 0 },
        load_completed: false,
        zoom: 1,
        alarmData: [],
        baseImgUrl: baseUrl+'/weather_img/',
        weatherMap: {'暴雨':'rain','暴雪':'snow','道路结冰':'ice','冰雹':'hail',
        '台风':'typhoon','大雾':'fog','大风':'wind','寒潮':'cold','干旱':'dry',
        '雷电':'thunder','霜冻':'frost','霾':'haze','高温':'hot'},
        colorMap: {'橙色':'orange','蓝色':'blue','黄色':'yellow','红色':'red'}
      }
    },
    created() {
        NProgress.start()
        getAlarmData().then((response) =>{
          for (let i=0;i<response.data.length;i++){
            response.data[i].show = false
          }
            this.alarmData = response.data
            window.console.log(this.alarmData)
            NProgress.done()
            this.load_completed = true
        })
    },
    methods: {
      handler({ BaiduMap, map }) {
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 6
      },
      infoWindowClose(item) {
        item.show = false
      },
      infoWindowOpen(item) {
        item.show = true
      }
    }
  }
</script>

<style scoped>
  .bm {
    margin-top: 20px;
    width: 100%;
    height: 500px;
  }

  .anchorBL {
    　　display: none;
  }

  .el-scrollbar {
    height: 100%;
  }
  .map-container{
    height: 600px;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>

