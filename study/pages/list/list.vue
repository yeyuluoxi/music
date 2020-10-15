<template>
	<view>
		<view>歌曲列表</view>
		<scroll-view :scroll-y="true" class="list">
			<view class="title flex content">
				<text>歌曲名</text>
				<text>类型</text>
				<text>操作</text>
			</view>
			<view v-for="(item,index) of list" class="flex content">
				<text>{{item.name}}</text>
				<text>{{item.type}}</text>
				<text>...</text>
			</view>
		</scroll-view>
		<view>选择</view>
		<view>
			<picker :value="index" :range="type" @change="select">
				<view>{{type[index]}}</view>
			</picker>
		</view>
	</view>
</template>

<script>
import data from "../../static/data/data.js"
export default {
	data() {
		return {
			list:data.list,
			type:data.type,
			index:0
		}
	},
	methods: {
		select(e){
			this.index = e.target.value;
		}
	}
}
</script>

<style scoped>
.list{
	border:1px solid #007AFF;
	height:60vh;
}

</style>
