let width = document.body.offsetWidth
let msgWidth = width >= 700 ? '600px' : '94%',
    left = width >= 700 ? 'calc((100vw - 600px)/2)' : '3%',
    length = 0,
    height = 60
import './font/iconfont.css'

let style = {
    success: {class: 'success', icon: '&#xe64c;'},
    err: {class: 'error', icon: '&#xe627;'},
    info: {class: 'info', icon: '&#xe603;'},
    notice: {class: 'notice', icon: '&#xe6be;'}
}

window.msg = {
    success: function (msg) {
        showMsg(style.success, msg)
    },
    err: function (msg) {
        showMsg(style.err, msg)
    },
    info: function (msg) {
        showMsg(style.info, msg)
    },
    notice: function (msg) {
        showMsg(style.notice, msg)
    },
}

async function showMsg (data, msg) {
    if (length > 3) return
    let top = length ? length * 60 + 20 * length : 0
    length++
    if (length > 1) {
        let time = 100 * length - 1
        await wait(time)
    }
    let div = document.createElement('div')
    let time = (new Date()).valueOf()
    div.innerHTML = `<div id="${time}" class="common-css ${data.class}" style="width:${msgWidth};left:${left};"><i class="iconfont" style="font-size: 16px;padding: 0 6px;float: right;">${data.icon}</i><span id="msg-text" style="font-size: 14px;">${msg}</span></div>`
    document.body.appendChild(div)
    let obj = document.getElementById(`${time}`)
    await wait(100)
    obj.style.transform = `translate3d(0%, ${top}px, 0)`
    obj.style.opacity = 1
    await wait(3000)
    obj.style.transform = 'translate3d(0%, -140%, 0)'
    obj.style.opacity = 0.7
    length--
    await wait(500)
    document.body.removeChild(div)
}

function wait (time) {
    return new Promise((resolve, reject) => {
        setTimeout(res => {
            resolve(true)
        }, time)
    })
}