/* 
 * 如果启用了上下文隔离，渲染进程无法使用electron的api，
 * 可通过contextBridge 导出api给渲染进程使用
 */
var remote = require('@electron/remote/main')
window.remote = remote
// const {
//   contextBridge,
//   ipcRenderer
// } = require('electron')

// contextBridge.exposeInMainWorld('electron', {
//   ipcRenderer: ipcRenderer,
// })