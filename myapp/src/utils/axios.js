//二次封装axios 安装axios
import axios from "axios";

let request = axios.create({
    //request==axios
    baseURL: "/dev-api", //基础路径
    timeout: 3000,
});
export default request; //封装好就导出request