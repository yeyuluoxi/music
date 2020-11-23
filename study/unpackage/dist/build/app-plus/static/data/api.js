const urlBase="http://127.0.0.1:8091/";
const api={
    
    reqest(method,url,params){
        return new Promise((resolve,reject)=>{
            uni.request({
                url:urlBase+url,
                method,
                data:params,
                success:res=>resolve(res)
            })
        })
    }
}
export default api