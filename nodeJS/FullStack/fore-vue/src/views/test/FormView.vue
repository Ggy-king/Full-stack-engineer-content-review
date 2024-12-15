<script setup>
import { ref } from 'vue';

const imageSrc = ref(null); // 用于存储图片的URL
const content = ref('显示表单内容')

// 发送请求  获取图片
// const handleUpdate = async () => {
//     try {
//         const response = await fetch('http://127.0.0.1:3000/portrait'); // 发送请求到服务器
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const blob = await response.blob(); // 获取Blob对象
//         imageSrc.value = URL.createObjectURL(blob); // 创建指向Blob的URL
//     } catch (error) {
//         console.error('错误信息', error);
//     }
// };

const handleUpdate = async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/portrait'); // 发送请求到服务器
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        response.json().then(res => {
            content.value = res
            imageSrc.value = 'http://127.0.0.1:3000' + res.data[0].imageUserUrl
        })
        
    } catch (error) {
        console.error('错误信息', error);
    }
};
</script>

<template>
    <!-- 表单 -->
    <!-- enctype="multipart/form-data"  这个属性很重要用于文件上传 -->
    <form action="http://127.0.0.1:3000/portrait" method="post" enctype="multipart/form-data">
        用户名：<input type="text" name="username"><br>
        书名：<input type="text" name="book"><br>
        作者名：<input type="text" name="author"><br>
        价格：<select name="price" id="">
            <option value="15">15</option>
            <option value="28">28</option>
            <option value="36">36</option>
            <option value="49">49</option>
        </select><br>
        头像：<input type="file" name="portrait"><br>
        <button>点击提交</button>
    </form>


    <!-- 后端数据展示 -->
    <div class="show">
        表单提交展示<button @click="handleUpdate()">刷新</button><br>
        <div class="show-content">{{ content }}</div>
        <img :src="imageSrc" alt="图片" />
    </div>
</template>

<style scoped>
.show {
    margin-top: 100px;
}

.show-content {
    font-weight: 700;
    color: black;
}
</style>