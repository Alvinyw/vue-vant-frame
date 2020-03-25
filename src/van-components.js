// 组件全局注册
import Vue from 'vue'

import {
    Button,
    Field,
    NavBar,
    Toast,
    Notify,
    Loading,
    Overlay,
    Dialog,
    Progress
} from 'vant';

// 组件库
const Components = [Progress, Dialog, Button, Overlay, NavBar, Field, Toast, Notify, Loading]

// // 将 "van-button" 转成 "Button" / "van-datetime-picker" 转成 "DatetimePicker"
// // 截取组件名称
// function interceptComponentName(str) {
//     str = str.substr(4).toLowerCase().split("-");
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i].slice(0, 1).toUpperCase() + str[i].slice(1);
//     }
//     return str.join("");
// }

// 注册全局组件
Components.map(com => {
    Vue.component(com.name, com)
})

export default Vue