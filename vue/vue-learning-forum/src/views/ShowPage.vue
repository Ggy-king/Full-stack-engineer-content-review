<template>
    <div class="show">
        <header>
            <span @click="handleBack"></span>
            详情
        </header>
        <hr>
        <main>
            <div class="show-title">{{ forum.title }}</div>
            <div class="show-per">
                <span>{{ forum.name }}</span>
                <img :src="forum.img" :alt="forum.name">
            </div>
            <div class="show-content">{{ forum.main }}</div>
            <div class="show-final">
                浏览:
                <span class="show-time">{{ forum.brown }}</span>
                喜欢
                <span class="show-like">{{ forum.like }}</span>
            </div>
        </main>
        
    </div>
</template>

<script>
// import getInfo from '@/utils/get.js'

export default {
    name: 'ShowPage',
    data() {
        return {
            forum: JSON.parse(localStorage.getItem("forum")),
            comment: '',
            showId: this.$route.params.id,
        }
    },
    // created() {
    //     // this.initForum()
    // },
    methods: {
        // initForum() {
        //     const forum = getInfo()
        //     const paramId = Number(this.$route.params.id)
        //     forum.then(res => {
        //         res.data.forum.map(ele => {
        //             if (ele.id === paramId) this.forum = ele
        //         })
        //     })
        // },
        handleBack() {
            this.$router.push({ name: 'forum' })
        },
        handleClickComment() {
            // bo ? this.$refs.comment.value = '请输入评论...' : this.$refs.comment.value = ''
        },
        keyupEnterInput() {
            this.$refs.comment.value = ''
        }
    }
}
</script>

<style lang="less" scoped>
.show {
    height: 100vh;
}
header {
    height: 12vmin;
    padding-top: 4vmin;
    font-size: 4.2vmin;
    font-weight: bold;
    line-height: 4vmin;
    color: #cdcdcd;

    span {
        float: left;
        width: 4vmin;
        height: 4vmin;
        margin-left: 5vmin;
        margin-right: 2vmin;
        border-top: 1vmin solid #eee;
        border-right: 1vmin solid transparent;
        border-bottom: 1vmin solid transparent;
        border-left: 1vmin solid #eee;
        transform: rotate(-45deg)
    }
}

main {
    padding: 4vmin;
    font-size: 4vmin;

    .show-title {
        padding-bottom: 2vmin;
        font-size: 5vmin;
        font-weight: 700;
        letter-spacing: 1vmin;
        font-style: italic;
    }

    .show-per {
        padding: 4vmin 0;
        font-style: italic;
        border-bottom: .5vmin dashed #896332;

        img {
            width: 10vmin;
            height: 10vmin;
            margin-right: 4vmin;
            border-radius: 50%;
        }
        span {
            float: right;
            padding-right: 4vmin;
            color: #6b6b6b;
        }
    }

    .show-content {
        margin-top: 4vmin;
        font-size: 4.4vmin;
        font-style: italic;
        text-indent: 2em;
        line-height: 10vmin;
        text-decoration: underline;
        text-decoration-color: aqua;
    }

    .show-final {
        margin-top: 4vmin;
        font-size: 3.5vmin;
        color: orange;
    }

}


</style>