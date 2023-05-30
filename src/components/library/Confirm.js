
import { createVNode, render } from 'vue'
import XtxConfirm from './xtx-confirm.vue'

// 准备一个DOM
const div = document.createElement('div')
div.setAttribute('class', 'xtx-confirm-container')
document.body.appendChild(div)

// 返回的是promise对象，点取消销毁组件，点确认销毁组件
export default ({ title, text }) => {
    // 1.导入被创建的组件
    // 2.将消息提示组件编译为虚拟节点（dom节点）
    // 3.准备一个装载消息提示组件的DOM容器
    // 4.将虚拟节点渲染在容器中
    return new Promise((resolve, reject) => {
        // 点击取消触发的函数
        const cancelCallback = () => {
            render(null, div)
            reject(new Error('点击取消'))
        }
        // 点击确认触发的函数
        const submitCallback = () => {
            render(null, div)
            resolve()
        }
        const vn = createVNode(XtxConfirm, { title, text, cancelCallback, submitCallback })
        render(vn, div)
    })
}
