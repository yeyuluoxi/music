import Vue from 'vue'
import Vuex from "vuex"
import App from './App'

Vue.use(Vuex)
import store from "./store"

Vue.prototype.$store = store;

//样式文件
import "static/css/common.css"

Vue.config.productionTip = false

App.mpType = 'app'


Vue.prototype.playMusic = (obj,volume=0.5)=>{
    let {path,name,type} = obj;
    type= type||"mp3";
    let music = null;
    music = uni.createInnerAudioContext(); //创建播放器对象
    music.src=`/static/music/${path}${name}.${type}`; //选择播放的音频
    music.volume = volume;
    return music
}








const app = new Vue({
    ...App
})
app.$mount()
