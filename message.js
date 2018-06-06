import { Notification} from 'element-ui'

window.msg = {
    success: function (msg) {
        Notification({
            title: '成功',
            message: msg,
            type: 'success'
        })
    },
    err: function (msg, title) {
        Notification({
            title: title ? title : '错误',
            message: msg,
            type: 'error'
        })
    },
    info: function (msg, title) {
        Notification({
            title: title ? title : '消息',
            message: msg,
            type: 'info'
        })
    },
    notice: function (msg, title) {
        Notification({
            title: title ? title : '警告',
            message: msg,
            type: 'warning'
        })
    },
}