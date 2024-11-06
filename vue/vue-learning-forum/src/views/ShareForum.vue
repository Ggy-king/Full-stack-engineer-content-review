<template>
    <div class="forum" :class="{'lazy':lazy}">
        <header>头部</header>
        <ul>
            <li v-for="(item) in forum" :key="item.id" ref="forumE" @click="handleToShow(item.id)" >
                <div class="forum-head">
                    <img :src="imgRandom(0, 9)" :alt="item.name" :ref="'img' + item.id">
                    <div>
                        <div class="forum-title">{{ item.title }}</div>
                        <span class="forum-tn">{{ item.name }} | 2024-10-31</span>
                    </div>
                </div>
                <p class="forum-main ellipsis">{{ item.main }}</p>
                <span class="forum-browse">点赞 {{ item.like }} | 浏览 {{ item.brown }}</span>
            </li>

        </ul>
    </div>
</template>

<script>
import getInfo from '@/utils/get.js';

export default {
    name: 'ShareForum',
    data() {
        return {
            forum: {},
            lazy: true,
            img: [
                require('@/images/1.jpg'),
                require('@/images/2.jpg'),
                require('@/images/3.jpg'),
                require('@/images/4.jpg'),
                require('@/images/5.jpg'),
                require('@/images/6.jpg'),
                require('@/images/7.jpg'),
                require('@/images/8.jpg'),
                require('@/images/9.jpg'),
            ],

        }
    },
    created() {
        this.initForum()
    },
    updated() {
        this.lazy = false
    },
    methods: {
        initForum() {
            const forum = getInfo()
            forum.then(res => {
                this.forum = res.data.forum
            })
        },
        imgRandom(n, m) {
            const newNum = Math.floor(Math.random() * (m - n + 1)) + n
            return this.img[newNum]
        },
        handleToShow(id) {
            // this.$refs['img' + id][0]  // 动态渲染的ref取到精确元素的办法
            this.forum.map(ele => {
                if (ele.id === id) {
                    ele.img = this.$refs['img' + id][0].src
                    localStorage.setItem("forum",JSON.stringify(ele))
                    this.$router.push({ name: 'show', params: { id } })
                }
                return
            })
        }
    }
}
</script>

<style lang="less" scoped>
.lazy {
    height: 100vh;
}
.forum {
    header {
        height: 12vmin;
        padding: 0 4vmin;
        line-height: 12vmin;
    }
    ul li {
        display: flex;
        flex-direction: column;
        margin-bottom: 4vmin;
        padding: 4vmin;
        width: 100%;
        height: 42vmin;
        background-color: #252525;
        font-size: 3vmin;
        color: #6b6b6b;

        .forum-head {
            flex: 3;
            display: flex;
            align-items: center;

            img {

                width: 10vmin;
                height: 10vmin;
                margin-right: 4vmin;
                border-radius: 50%;
            }

            .forum-title {
                font-size: 5vmin;
                font-weight: 700;
                color: #fff;
            }
        }

        .forum-main {
            flex: 3;
            font-size: 4.2vmin;
            color: #cdcdcd;
            
        }

        .forum-browse {
            flex: 2;
            display: flex;
            align-items: center;
            color: #896332;
        }
    }

}
</style>