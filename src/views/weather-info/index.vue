<template>
  <div class="main" v-show="load_completed">
    <h1>{{city_name}}天气|<router-link :to="{path:'/weather/current-forecast'}" replace style="padding-bottom: 2px; border-bottom: 2px solid #ffffff;">返回</router-link></h1>
    <div class="w3_agile_main_grids">
      <div class="w3layouts_main_grid">
        <div class="w3layouts_main_grid_left">
          <h2>{{country}}, {{city_name}}.</h2>
          <p>{{air_tips}}</p>
          <h3>现在天气</h3>
          <h4>{{current_temp}}<span>°c</span> {{weather}}</h4>
        </div>
        <div class="w3layouts_main_grid_right">
          <canvas id="sleet" width="70" height="70"> </canvas>
          <div id="w3time" ref="w3time"></div>
          <div class="w3layouts_date_year">
            {{date}}
          </div>
        </div>
        <div class="clear"> </div>
      </div>

      <div class="agileits_w3layouts_main_grid">
        <div class="agile_main_grid_left">
          <div class="wthree_main_grid_left_grid">
            <div class="w3ls_main_grid_left_grid1">
              <div class="w3l_main_grid_left_grid1_left">
                <h3>气压</h3>
                <p>{{pressure}}<span> hPa</span></p>
              </div>
              <div class="w3l_main_grid_left_grid1_right">
                <p id="partly-cloudy-day" width="45" height="45"><img :src="pressure_url"></p>
              </div>
              <div class="clear"> </div>
            </div>
            <div class="w3ls_main_grid_left_grid1">
              <div class="w3l_main_grid_left_grid1_left">
                <h3>风速风向</h3>
                <p>{{win}}<span>{{win_meter}}</span></p>
              </div>
              <div class="w3l_main_grid_left_grid1_right">
                <p id="cloudy" width="45" height="45"><img :src="win_meter_url"></p>
              </div>
              <div class="clear"> </div>
            </div>
            <div class="w3ls_main_grid_left_grid1">
              <div class="w3l_main_grid_left_grid1_left">
                <h3>风速等级</h3>
                <p>{{win_speed}}</p>
              </div>
              <div class="w3l_main_grid_left_grid1_right">
                <p id="wind" width="45" height="45"><img :src="win_speed_url"></p>
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
      <p>© 2020 Spring Weather. All rights reserved</p>
    </div>
  </div>
</template>

<script>
  import NProgress from 'nprogress'
  import { getCurrentWeather } from '@/api/weather'
  export default {
    name: 'index',
    data(){
      return{
        url: require('../../assets/png/search.png'),
        bodyBgImage: 'url(' + require('../../assets/jpg/2.jpg') + ')',
        pressure_url: require('../../assets/png/pressure.png'),
        win_meter_url: require('../../assets/png/win_meter.png'),
        win_speed_url: require('../../assets/png/win_speed.png'),
        today_show: true,
        forecast_show: false,
        load_completed: false,
        // response params
        city_name: '',
        current_temp: '',
        country: '',
        date: '',
        weather: '',
        air_tips: '',
        pressure: '',
        win: '',
        win_meter: '',
        win_speed: ''
      }
    },
    mounted() {
      this.getData();
    },
    beforeDestroy () {
      this.clearBodyBackGround()
    },
    methods:{
      getData(){
        NProgress.start()
        const keyword = this.$route.query.keyword
        if (keyword != undefined){
          getCurrentWeather(false,keyword).then((response) =>{
              NProgress.done()
              this.post_processor(response.data)
          })
        } else {
          getCurrentWeather(true).then((response) =>{
              NProgress.done()
              this.post_processor(response.data)
          })
        }

      },
      post_processor(data){           // 请求结果返回后的处理函数
        this.city_name = data.city
        this.current_temp = data.tem
        this.country = data.country
        this.weather = data.wea
        this.air_tips = data.air_tips
        this.date = data.date
        this.win = data.win
        this.win_meter = data.win_meter
        this.win_speed = data.win_speed
        this.pressure = data.pressure
        this.load_completed = true
        this.startTime();
        this.setBodyBackGround();
        window.console.log(data)
      },
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
        let timer = this.$refs.w3time
        if(timer != undefined){
          timer.innerHTML = h + ":" + m + ":" + s;
        }
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
  width: 40%;
  margin-top: 1%
}
.bg{
  background: url(../../assets/jpg/2.jpg) no-repeat 0px 0px;
}
.active{
  color: #ffffff;
}
</style>
