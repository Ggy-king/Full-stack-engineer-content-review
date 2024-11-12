// 两眼一闭就是去官方上拷贝 axios-http.cn

// 为什么要实例化，什么叫拦截器

/**
1 个性化配置‌：通过创建不同的axios实例，可以为不同的服务配置不同的请求参数，如超时时间、请求头、基础URL等。
  例如，一个实例可以配置为使用HTTP状态码判断响应是否正常，而另一个实例则使用服务器自定义的状态码。这样可以更好地处理不同服务的需求‌1。

2 ‌全局配置与局部配置的分离‌：全局配置适用于所有请求，而局部配置适用于特定的请求。
  通过创建实例，可以在实例级别进行个性化的配置，而不会影响到全局配置，使得配置更加灵活和可控‌。

3 ‌拦截器的使用‌：通过创建不同的axios实例，可以为每个实例添加特定的拦截器，处理不同的请求和响应。
  这样可以避免全局拦截器对某些请求的不必要干扰，提高代码的可维护性和可读性‌。

4 ‌统一管理‌：创建实例可以统一管理全局参数，如基础URL、请求头等。
  这样在后续开发中，如果需要更换请求库或添加新的参数，维护起来会更加方便‌2。

5 ‌避免污染‌：直接使用axios时，每次调用都需要写上完整的URL，且全局拦截器会影响所有请求。
  而通过创建实例，可以避免这种情况，每个实例都是独立的，不会相互影响‌2

*/


import axios from 'axios'

// 创建实例

const instance = axios.create({   // 不会污染原始的axios实例
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' } 后端没配
});

// 自定义配置 1 请求/响应拦截器

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 添加loading 还要禁止背景点击  关闭loading要在下面响应中关闭



  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  const res = response.data
  if(res.status !== 200){
    // 写一些用户端的错误逻辑
    return Promise.reject(res.message)
  } else {
    // 关闭loading逻辑
  }

  // 对响应数据做点什么 (默认axios会对响应多包装一层data 响应拦截器中处理一下)
  return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance



