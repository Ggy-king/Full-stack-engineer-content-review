<template>
    <div class="person">
        <span class="about iconfont icon-liaotian" ></span>
        <header>
            <img src="../images/7.jpg" alt="图片">
            <div>
                <span class="person-name">观察者HIHI</span>
                <span class="person-poem">文风：文学大师</span>
            </div>
        </header>
        <main>
            <div class="person-use">
                <ul>
                    <li><span class="iconfont icon-lishi"></span><span>历史</span></li>
                    <li><span class="iconfont icon-xihuan1"></span><span>喜欢</span></li>
                    <li><span class="iconfont icon-dingyue"></span><span>订阅</span></li>
                    <li><span class="iconfont icon-paiming"></span><span>诗词排名</span></li>
                </ul>
            </div>
            <div class="person-other">
                <ul>
                    <li>最新活动<span class="right-symbol">></span></li>
                    <li>加入群组<span class="right-symbol">></span></li>
                    <li>帮助与反馈<span class="right-symbol">></span></li>
                    <li>关于我们<span class="small">版本1.1.2</span></li>
                    <li>更多设置<span class="right-symbol">></span></li>
                    <li>深色模式<span class="small">跟随系统</span></li>
                </ul>
            </div>

        </main>
    </div>
</template>

<script>
export default {
    name: 'PersonInformation'
}
</script>

<style lang="less" scoped>
@import '../assets/font/iconfont.css';

.person {
    height: 100vh;
    padding-top: 8vmin;
    font-size: 5vmin;
    color: #fff;
    background-color: #181818;

    .about {
        position: absolute;
        top: 2vmin;
        right: 6vmin;
        font-size: 6vmin;
        color: #cdcdcd;
    }

    header {
        height: 28vmin;
        padding-left: 4vmin;
        margin-bottom: 4vmin;
        color: #eee;

        img {
            float: left;
            width: 20vmin;
            height: 20vmin;
            border-radius: 50%;
            margin-top: 4vmin
        }

        div {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .person-name {
                font-style: oblique;
                letter-spacing: 1vmin;
            }
            .person-poem {
                margin-top: 3vmin;
                font-size: 3vmin;
                color: #cfced4;
            }

        }
    }

    main {
        .person-use {
            height: 28vmin;
            background-color: #1d1d1d;
            
            border-top-left-radius: 6vmin;
            border-top-right-radius: 6vmin;

            ul {
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;

                li {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-size: 4vmin;
                    text-align: center;
                    color: #cdcdcd;
                    .iconfont {
                        font-size: 6vmin;
                    }
                }
            }

        }

        .person-other {
            background-color: #1f1f1f;
            padding: 0 6vmin;
            font-size: 4.5vmin;
            font-style: italic;
            ul {
                li {
                    position: relative;
                    height: 18vmin;
                    border-top: .5vmin solid #242424;
                    line-height: 18vmin;
                    color: #eee;
                    .right-symbol {
                        position: absolute;
                        right: 0;
                        color: #cfced4;

                    }
                    .small {
                        float: right;
                        font-size: 3vmin;
                        color: #cfced4;

                    }
                }
            }

        }
    }

}
</style>