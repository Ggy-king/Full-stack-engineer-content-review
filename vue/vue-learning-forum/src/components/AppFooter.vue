<template>
    <footer>
        <ul>
            <li ref="def"><router-link to="/forum">社区</router-link></li>
            <li><router-link to="/publish">发布</router-link></li>
            <li><router-link to="/like">喜欢</router-link></li>
            <li><router-link to="/person">我的</router-link></li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    created() {
        if (this.$router.currentRoute.name === 'forum' || this.$router.currentRoute.name === null) this.$refs.def.classList.add('.def')
    }
}
</script>

<style lang="less" scoped>
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 14vmin;
    background-color: #181818;


    ul {
        width: 100%;
        height: 100%;
        display: flex;
        border-top: 1px solid #aeaeae;

        li {
            flex: 1;
            font-size: 4vmin;
            line-height: 14vmin;
            text-align: center;

            .link-active {
                color: #cbb874;
            }
        }
    }
}
</style>