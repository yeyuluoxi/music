<template>
	<view class="content">
		<view class="main">
			{{musicName}}
		</view>
		<view class="features flex f_wrap">
			<button @tap="_startMusic">开始</button>
			<button @tap="_pauseMusic">暂停</button>
			<button @tap="_stopMusic">结束</button>
			<button @tap="_addSound">+</button>
			<button @tap="_minusSound">-</button>
			<button>循环</button>
			<button>随机</button>
			<button @tap="_prevMusic"><</button>
			<button @tap="_nextMusic">></button>
		</view>
		<view class="now">
			<text class="toDetail">o</text>
			<text class="name">{{this.musicName}}</text>
			<text class="turn right">s/e</text>
		</view>
	</view>
</template>

<script>
import data from "../../static/data/data.js"
import { mapState } from "vuex"
export default {
	data() {
		return {
			title: '清羽',
			music:"",
			musicName:"ting",
			play:false,
			stop:true,
			path:"",
			list:data.list,
			musicList:{}
		}
	},
	computed:{
		...mapState(["username"]),
	},
	onLoad() {
		console.log(this.username,"1111")

	},
    mounted(){
        this.music=this.playMusic(this.list[0],0.5);
        this.music.play();
    },
	methods: {
        _nextMusic(){
            this.music.destroy();
            this.music=this.playMusic(this.list[1],0.5)
            this.music.play();
            this.music.onEnded(()=>{
                this._prevMusic();
            });
        },
        _prevMusic(){
            this.music.destroy();
            this.music=this.playMusic(this.list[0])
            this.music.play();
            this.music.onEnded(()=>{
                this._nextMusic();
            });
        },
		_minusSound(){
			let sound = this.music.volume;
			sound-=0.1;
			sound=Math.max(0,sound);
			this.music.volume=sound;
		},
		_addSound(){
			let sound = this.music.volume;
			sound+=0.1;
			sound=Math.min(1,sound);
			this.music.volume=sound;
		},
		_startMusic(){
			this.music.play();
		},
		_pauseMusic(){
			this.music.pause();
		},
		_stopMusic(){
			this.music.stop();
		},
	}
}
</script>

<style type="text/scss" lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.main{
		height:40vh;
		width:100%;
		border-bottom:1px solid #2C405A;
	}
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 1.25rem;
	color: #8f8f94;
}
.file{
	border:1px solid #4CD964;
}
.now{
	position:fixed;
	left:0;
	right:0;
	bottom:50px;
	height:40px;
	border-top:1px solid #007AFF;
	line-height:40px;
}
.toDetail{
	padding:0 8px;
}
</style>