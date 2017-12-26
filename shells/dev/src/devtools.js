import { initDevTools } from 'src/devtools'
import Bridge from 'src/bridge'

const target = document.getElementById('target')
const targetWindow = target.contentWindow

// 1. load user app
target.src = 'target.html'
target.onload = () => {
    console.log('iframe loaded');
  // 2. init devtools
  initDevTools({
    connect (cb) {
      // 3. called by devtools: inject backend
      inject('./build/backend.js', () => {
        // 4. send back bridge
        // 在子容器加载好backend.js以后，执行下面
        cb(new Bridge({
          listen (fn) {
            // 父容器监听事件，并触发某一行为
            targetWindow.parent.addEventListener('message', evt => fn(evt.data))
          },
          send (data) {
            // 给字容器发送消息
            console.log('devtools -> backend', data)
            targetWindow.postMessage(data, '*')
          }
        }))
      })
    },
    onReload (reloadFn) {
      target.onload = reloadFn
    }
  })
}

function inject (src, done) {
  if (!src || src === 'false') {
    return done()
  }
  const script = target.contentDocument.createElement('script')
  script.src = src
  script.onload = done
  target.contentDocument.body.appendChild(script)
}
