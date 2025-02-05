import axios from 'axios';

// 配置基础 URL，避免每次都写完整的 URL
axios.defaults.baseURL = 'api';
axios.defaults.timeout = 10000; // 设置请求超时时间

// 可根据需求添加其他配置，比如请求头等
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios;