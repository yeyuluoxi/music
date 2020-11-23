<template>
	<view>
		<button @tap="send">测试</button>
		<button @tap="sql">数据</button>
		<button @tap="send">测试</button>
	</view>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    methods: {
        send(){
            this.get("xi",{page:5,id:"id"}).then(res=>{
                console.log(res,"55555")
            })
        },
        sql(){
            this.get("qi",{member:"yuxi"}).then(res=>{
                console.log(res,"55555")
            })
        }
    }
}
</script>

<style>

</style>
