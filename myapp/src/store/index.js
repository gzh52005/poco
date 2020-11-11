// const data = {
//     username: 'xiaoxie',
//     password: 1234,
//     avatar: '../img/xiaoxie.jpg'
// }
import React, { useReducer } from "react";

// export default data;


const initState = [
    { name: "goods1", price: 98, qty: 2 },
    { name: "goods2", price: 198, qty: 2 },
    { name: "goods3", price: 998, qty: 1 },
];

// dispatch({type:'add',goods})
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [action.goods, ...state];
        case 'remove':
            return state.filter(item => item.name != action.name);
        case 'change':
            return state.map(item => {
                if (item.name === action.name) {
                    item.qty = action.qty;
                }
                return item;
            })
        case 'clear':
            return []
        default:
            throw new Error('type error');
    }
}


// 要遵循唯一数据源原则，useReducer只能使用一次
// 解决方案：在当前文件中使用一次reducer后，并利用Context技术把数据共享出去
export const context = React.createContext(null);
export const Provider = function (props) {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <context.Provider value={{ state, dispatch }}>
            {props.children}
        </context.Provider>
    )
}   