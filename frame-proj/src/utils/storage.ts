// 封装针对 localStorage 工具类
export default {
    set(key: string, val: any) {
        localStorage.setItem(key, JSON.stringify(val));
    },
    get(key: string){
        const value = localStorage.getItem(key)
        if (value)
        try {
            return JSON.parse(value)
        }catch (error){
            return value
        }
    },
    del(key:string){
        localStorage.removeItem(key)
    },
    clear(){
        localStorage.clear()
    }
}