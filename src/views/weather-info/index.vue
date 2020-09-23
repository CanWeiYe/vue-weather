<template>
  <div class="main">
    <h1>Aridity Weather Widget</h1>
    <div class="w3_agile_main_grids">
      <div class="w3layouts_main_grid">
        <div class="w3layouts_main_grid_left">
          <h2>London, United Kingdom.</h2>
          <p>Mostly Rainy</p>
          <h3>Now</h3>
          <h4>10<span>°c</span></h4>
        </div>
        <div class="w3layouts_main_grid_right">
          <canvas id="sleet" width="70" height="70"> </canvas>
          <div id="w3time"></div>
          <div class="w3layouts_date_year">
            2020/9/23
          </div>
        </div>
        <div class="clear"> </div>
      </div>

      <div class="agileits_w3layouts_main_grid">
        <div class="agile_main_grid_left">
          <div class="wthree_main_grid_left_grid">
            <div class="w3ls_main_grid_left_grid1">
              <div class="w3l_main_grid_left_grid1_left">
                <h3>Partly Sunny</h3>
                <p>3 <span>%</span></p>
              </div>
              <div class="w3l_main_grid_left_grid1_right">
                <p id="partly-cloudy-day" width="45" height="45">111</p>
              </div>
              <div class="clear"> </div>
            </div>
            <div class="w3ls_main_grid_left_grid1">
              <div class="w3l_main_grid_left_grid1_left">
                <h3>Cloud</h3>
                <p>38 <span>%</span></p>
              </div>
              <div class="w3l_main_grid_left_grid1_right">
                <p id="cloudy" width="45" height="45">222</p>
              </div>
              <div class="clear"> </div>
            </div>
            <div class="w3ls_main_grid_left_grid1">
              <div class="w3l_main_grid_left_grid1_left">
                <h3>Wind</h3>
                <p>14 <span>Km/h</span></p>
              </div>
              <div class="w3l_main_grid_left_grid1_right">
                <p id="wind" width="45" height="45">333</p>
              </div>
              <div class="clear"> </div>
            </div>
          </div>
        </div>
        <div class="w3_agileits_main_grid_right">
          <div class="agileinfo_main_grid_right_grid">
            <div id="parentHorizontalTab">
              <ul class="resp-tabs-list hor_1">
                <li style="margin-left: 10%;color:#ffffff;" ref="today" @click="toggle_today">Today</li>
                <li style="margin-left: 20%" ref="forecast" @click="toggle_forecast">Week</li>
              </ul>
              <div class="resp-tabs-container hor_1">
                <div class="w3_agileits_tabs" v-if="today_show">
                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>10 AM</p>
                    </div>
                    <div class="w3_main_grid_right_grid1_right">
                      <p>15°c<span>Cloudy</span></p>
                    </div>
                    <div class="clear"> </div>
                  </div>
                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>11 AM</p>
                    </div>
                    <div class="w3_main_grid_right_grid1_right">
                      <p>16<i>°c</i><span>Clear</span></p>
                    </div>
                    <div class="clear"> </div>
                  </div>
                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>12 PM</p>
                    </div>
                    <div class="w3_main_grid_right_grid1_right">
                      <p>18<i>°c</i><span>Cear</span></p>
                    </div>
                    <div class="clear"> </div>
                  </div>
                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>2 PM12312312312312312</p>
                    </div>
                    <div class="clear"> </div>
                  </div>
                </div>
                <div class="w3_agileits_tabs" v-if="forecast_show">
                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>Monday</p>
                    </div>
                    <div class="w3_main_grid_right_grid1_middle">
                      <img :src="url" class="weather-img">
                    </div>
                    <div class="w3_main_grid_right_grid1_right" style="text-align: center">
                      <p>14°c~16°c<span>Clear</span></p>
                    </div>
                    <div class="clear"> </div>
                  </div>
                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>Tuesday</p>
                    </div>
                    <div class="w3_main_grid_right_grid1_right">
                      <p>16°c<span>Cloudy</span></p>
                    </div>
                    <div class="clear"> </div>
                  </div>
                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>Wednesday</p>
                    </div>
                    <div class="w3_main_grid_right_grid1_right">
                      <p>11°c<span>Rainy</span></p>
                    </div>
                    <div class="clear"> </div>
                  </div>
                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>Thursday</p>
                    </div>
                    <div class="w3_main_grid_right_grid1_right">
                      <p>18°c<span>Sunny</span></p>
                    </div>
                    <div class="clear"> </div>
                  </div>

                  <div class="w3_main_grid_right_grid1">
                    <div class="w3_main_grid_right_grid1_left">
                      <p>Thursday</p>
                    </div>
                    <div class="w3_main_grid_right_grid1_right">
                      <p>18°c<span>Sunny</span></p>
                    </div>
                    <div class="clear"> </div>
                  </div><div class="w3_main_grid_right_grid1">
                  <div class="w3_main_grid_right_grid1_left">
                    <p>Thursday</p>
                  </div>
                  <div class="w3_main_grid_right_grid1_right">
                    <p>18°c<span>Sunny</span></p>
                  </div>
                  <div class="clear"> </div>
                </div><div class="w3_main_grid_right_grid1">
                  <div class="w3_main_grid_right_grid1_left">
                    <p>Thursday</p>
                  </div>
                  <div class="w3_main_grid_right_grid1_right">
                    <p>18°c<span>Sunny</span></p>
                  </div>
                  <div class="clear"> </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="clear"> </div>
      </div>
    </div>
    <div class="agileits_copyright">
      <p>© 2017 Aridity Weather Widget. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
    </div>
  </div>
</template>

<script>
  import NProgress from 'nprogress'
  export default {
    name: 'index',
    data(){
      return{
        url: require("../../assets/png/search.png"),
        bodyBgImage: 'url(' + require('../../assets/jpg/2.jpg') + ')',
        today_show: true,
        forecast_show: false
      }
    },
    mounted() {
      this.startTime();
      this.setBodyBackGround();
    },
    beforeDestroy () {
      this.clearBodyBackGround()
    },
    methods:{
      toggle_today(){
          if (this.today_show){
              return;
          } else {
            this.today_show = !this.today_show
            this.forecast_show = !this.forecast_show
            this.$refs.today.style.color = '#ffffff';
            this.$refs.forecast.style.color = '#000000';
          }
      },
      toggle_forecast(){
        if (this.forecast_show){
          return;
        } else {
          this.today_show = !this.today_show
          this.forecast_show = !this.forecast_show
          this.$refs.forecast.style.color = '#ffffff';
          this.$refs.today.style.color = '#000000';
        }
      },
      startTime(){
        let today = new Date()
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = this.checkTime(m);
        s = this.checkTime(s);
        document.getElementById('w3time').innerHTML =
          h + ":" + m + ":" + s;
        let t = setTimeout(this.startTime, 500);
      },
      checkTime(i){
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      },
      // 添加body图片
      setBodyBackGround () {
        document.body.style.backgroundSize = '140%'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundPosition = '0px 0px'
        document.body.style.backgroundImage = this.bodyBgImage
      },
      // 清除背景图
      clearBodyBackGround () {
        document.body.style.backgroundImage = ''
        document.body.style.backgroundSize = ''
        document.body.style.backgroundRepeat = ''
        document.body.style.backgroundPosition = ''
      }
    }
  }

</script>

<style scoped src="../../styles/easy-responsive-tabs.css"></style>
<style scoped src="../../styles/style.css"></style>
<style scoped>
.weather-img{
  width: 50%;
  margin-top: 1%
}
.bg{
  background: url(../../assets/jpg/2.jpg) no-repeat 0px 0px;
}
.active{
  color: #ffffff;
}
</style>
