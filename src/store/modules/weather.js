const weather = {
  state:{
    city: ''
  },
  mutations:{
    SET_CITYNAME: (state,city_name) => {
      state.city = city_name
    }
  },
  actions:{}
}
export default weather
