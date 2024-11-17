<template>
    <div>
        {{ $route.query.pen }}
    </div>
</template>

<script>
export default {
    name: 'HomePage',  // 这里是可以更改组件对外的组件名称 这样的话我们自己写的文件可以是任何一个名字
    created() {
        this.$route.query.key   // 对路由操作要在created中
        this.$route.params.word  // 动态路由的参数是params word是你在路由文件中配置的动态参数名称
    },
    methods: {
        goSearch() {
            // 编程式导航 1 path跳转 2 name跳转
            // 1 path跳转传参   1 查询参数拼?或query  2 动态参数直接/参数

            this.$router.push('./shop')  // 注意这里是router  routes是路由器匹配规则 router是路由对象 route是路由实例
            this.$router.push({
                path: '/shop'
            })
            this.$router.push({
                path: '路由名字'   // 当你给路由配置了name的时候 可以用name跳转 适合path比较长的场景
            })
            this.$router.replace({  // push会一直累加地址 但replace是替换不会新增地址
                path: '路由名字'   
            })

            // 传参
            this.$router.push('/路径/参数')
            this.$router.push('/路径?键=值&键=值')
            this.$router.push({
                path: '/shop',
                query: {
                    键1: 值1,
                    键2: 值2,
                }
            })
            this.$router.push({
                path: '/shop/参数',
            })
            // 如果路由有name名字
            this.$router.push({
                name: '路由名字',
                query: {
                    键1: 值1,
                    键2: 值2,
                },
                params: {
                    words: '参数'   // 这里的键是路由中的:words?
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>