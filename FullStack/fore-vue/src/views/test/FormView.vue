<script setup>
import { ref } from 'vue';

const showText = ref('返回内容')


// 发送请求
const handleUpdate = () => {
    fetch('http://127.0.0.1:3000/portrait').then(res => {
        return res.text()
    }).then(res => {
        showText.value = res
    })

}
</script>

<template>
    <!-- 表单 -->
    <!-- enctype="multipart/form-data"  这个属性很重要用于文件上传 -->
    <form action="http://127.0.0.1:3000/portrait" method="post" enctype="multipart/form-data">
        用户名：<input type="text" name="username"><br>
        头像：<input type="file" name="portrait"><br>
        <button>点击提交</button>
    </form>


    <!-- 后端数据展示 -->
    <div class="show">
        表单提交展示<button @click="handleUpdate()">刷新</button><br>
        <div class="show-content">{{ showText }}</div>
    </div>
</template>

<style scoped>
.show {
    margin-top: 100px;
}

.show-content {
    color: blue;
}
</style>