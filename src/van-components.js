// 组件全局注册
import Vue from 'vue'

import {
    Button,
    Cell,
    CellGroup,
    PasswordInput,
    NumberKeyboard,
    Field,
    Toast,
    NavBar,
    Checkbox,
    CheckboxGroup,
    Notify,
    Tab,
    Tabs,
    Loading,
    Row,
    Col,
    Popup,
    List,
    PullRefresh,
    Overlay,
    Grid,
    GridItem,
    CountDown,
    RadioGroup,
    Radio,
    ActionSheet,
    Dialog,
    Picker,
    Progress,
    DatetimePicker
} from 'vant';

// 组件库
const Components = [DatetimePicker, Progress, Picker, Dialog, ActionSheet, RadioGroup, Radio, CountDown, Grid, GridItem, Button, Overlay, Cell, CellGroup, Field, PasswordInput, NumberKeyboard, Toast, NavBar, Checkbox, CheckboxGroup, Notify, Row, Col, Popup, Tab, Tabs, Loading, List, PullRefresh]

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