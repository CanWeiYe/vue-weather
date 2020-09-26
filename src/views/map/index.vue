<template>
  <div class="map-container">
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
                   @click="clickHandler">
          <bm-panorama></bm-panorama>
          <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_LEFT"></bm-navigation>
          <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
          <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                          :showAddressBar="true"
                          :autoLocation="true"></bm-geolocation>
          <i class="el-icon-search" style="margin-left: 20%"></i>
          <el-input placeholder="请输入地区" v-model="location" clearable size="medium" style="width: 30%;margin: 2px 2% 0 10px;"></el-input>
          <el-input placeholder="请输入关键词" v-model="keyword" clearable size="medium" style="width: 30%;margin-top: 2px"></el-input>
          <bm-local-search :keyword="keyword"
                           :auto-viewport="true"
                           :location="location"></bm-local-search>
        </baidu-map>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>

  import baiduMap from 'vue-baidu-map/components/map/Map.vue'
  import bmLocalSearch from 'vue-baidu-map/components/search/LocalSearch'
  import bmNavigation from 'vue-baidu-map/components/controls/Navigation'
  import bmMapType from 'vue-baidu-map/components/controls/MapType'
  import bmGeolocation from 'vue-baidu-map/components/controls/Geolocation'
  import bmPanorama from 'vue-baidu-map/components/controls/Panorama'

  export default {
    name: 'index',
    components: {
        baiduMap,bmLocalSearch,bmNavigation,
        bmMapType,bmGeolocation,bmPanorama
    },
    data() {
      return {
        center: { lng: 0, lat: 0 },
        zoom: 3,
        keyword: undefined,
        location: undefined
      }
    },
    methods: {
      handler({ BaiduMap, map }) {
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 15
      },
      clickHandler(e) {
        this.center.lat = e.point.lat
        this.center.lng = e.point.lng
      }
    }
  }
</script>

<style scoped>
  .bm {
    margin-top: 30px;
    width: 100%;
    height: 400px;
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
