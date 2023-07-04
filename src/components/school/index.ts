import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import Left from './Left.vue'
import Right from './Right.vue'

const left = createApp(Left)

left.use(ElementPlus)  // 此时 ElementPlus 的使用在根组件的挂载之前，是正确的；
left.mount('#left')

const right = createApp(Right)

right.use(ElementPlus)  // 此时 ElementPlus 的使用在根组件的挂载之前，是正确的；
right.mount('#right')
