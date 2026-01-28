/**
 * 工具类封装
 * */

/**金额千分位格式化*/
export const formatMoney=(num?:number|string)=>{
    if (!num) return '0.00';
    let rn:number;
        rn = parseFloat(num.toString())
    return rn.toLocaleString('ch-ZN', {style: "currency", currency: "CNY",minimumFractionDigits:2, minimumIntegerDigits:3});
}

/**日期格式化*/
export const formatToDate=(date?:Date,format?:string)=>{
    let currentDate = new Date()
    if (date) {
       currentDate = date
    }
    if (format === 'yyyy-MM-dd') {
        return currentDate.toLocaleDateString().replaceAll('/','-')
    }
    if (format === 'HH:mm:ss') {
        return currentDate.toLocaleTimeString().replaceAll('/','-')
    }
    return currentDate.toLocaleString().replaceAll('/','-')
}
