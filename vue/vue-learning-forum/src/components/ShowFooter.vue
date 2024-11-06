<template>
    <footer class="show-footer">
        <input type="text" :value="comment" ref="comment" @keyup.enter="keyupEnterInput" placeholder="请输入评论...">
        <span class="iconfont icon-xihuan red"></span>
        <span class="iconfont icon-dianzan_kuai"></span>
        <span class="iconfont icon-fenxiang"></span>
        <span class="iconfont icon-buxihuan"></span>
    </footer>
</template>

<script>
export default {
    name: 'ShowFooter',
    data() {
        return {
            comment: ''
        }
    },
    methods: {
        keyupEnterInput() {
            this.$refs.comment.value = ''
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/font/iconfont.css';

.show-footer {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 14vmin;
    background-color: #181818;
    padding-left: 4vmin;
    border-top: 1px solid #aeaeae;

    input {
        height: 8vmin;
        padding-left: 2vmin;
        font-size: 3vmin;
        border-radius: 2vmin;
        color: #181818;
    }

    span {
        flex: 3;
        text-align: center;
        font-size: 6vmin;
        color: #aeaeae;
    }
    .red {
        color: red;
    }

}
</style>