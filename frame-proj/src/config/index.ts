//环境变量封装
type ENV = 'dev' | 'pre' | 'prod'

const env: ENV = (document.documentElement.dataset.env as ENV) || 'dev'

const config = {
    'dev': {
        baseApi: 'localhost:8080',
        appPicAddr: 'localhost:8081',
        isMock:true,
        content:'this is dev environment'
    },
    'pre': {
        baseApi: 'pre:8080',
        appPicAddr: 'pre:8081',
        isMock:true,
        content:'this is pre environment'
    },
    'prod': {
        baseApi: 'prod:8080',
        appPicAddr: 'prod:8081',
        isMock:true,
        content:'this is prod environment'
    }
}
export default {
    env,
    //析构出对应配置
    ...config['prod']
}