// import { useState } from 'react';
// export function useStorage(key) {
//     let data = localStorage.getItem(key);// null,string,json
//     try {
//         data = JSON.parse(data) || {};
//     } catch (err) {
//         data = data;
//     }
//     const [state, changeState] = useState(data);

//     function setStorage(newData) {
//         // 修改storage时如何做到刷新组件
//         changeState(newData);

//         if (typeof newData === 'object') {
//             newData = JSON.stringify(newData)
//         }
//         localStorage.setItem(key, newData)
//     }
//     return [state, setStorage];
// }