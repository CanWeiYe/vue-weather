<template>
  <div class="dashboard-container">
    <div class="dashboard-text">spring天气</div>
    <el-divider>
      <i class="el-icon-sunny" style="font-size:22px">
        <span class="dashboard-text-small" style="color: red">基于开放API的数值天气预报</span>
      </i>
      <i class="el-icon-lightning" style="font-size:22px"></i>
    </el-divider>

    <div class="chart-wrapper">
      <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData" />
      </el-row>
    </div>



    <div class="mix-chart-container">
      <mix-chart style="width: 100%;height: 100%"></mix-chart>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import LineChart from './components/LineChart'
  import MixChart from '@/components/Charts/MixChart'

  const lineChartData = {
    temperature: {
      maxData: [32, 32, 33, 32, 34, 35, 35],
      minData: [26, 26, 26, 26, 27, 27, 28]
    }
  }

  export default {
    name: 'Dashboard',
    components: {
      MixChart,
      LineChart
    },
    data() {
      return {
        lineChartData: lineChartData.temperature
      }
    },
    computed: {
      ...mapGetters([
        'name'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-text {
      font-size: 30px;
      line-height: 46px;
      text-align: center;
    }

    &-text-small {
      font-size: 20px;
      line-height: 36px;
      text-align: center;
    }
  }

  .dashboard-container {
    padding: 16px;
  //  background-color: rgb(240, 242, 245);
    position: relative;

    .chart-wrapper {
   //   background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
  }

  @media (max-width: 1024px) {
    .chart-wrapper {
      padding: 8px;
    }
  }
  .mix-chart-container{
    width: 100%;
    height: 400px;
  }
</style>
