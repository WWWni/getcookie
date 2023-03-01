<template>
  <div id="app-base-window-view">
    <div class="one-block-1">
      <span> 1. 嵌入web内容 </span>
    </div>
    <div class="one-block-2">
      <a-space>
        <a-button @click="loadViewContent(0)">加载百度页面</a-button>
        <a-button @click="removeViewContent(0)">移除百度页面</a-button>
      </a-space>
    </div>
    <div class="one-block-1">
      <span> 2. 嵌入html内容 </span>
    </div>
    <div class="one-block-2">
      <a-space>
        <a-button @click="loadViewContent(0)">加载html页面</a-button>
        <a-button @click="removeViewContent(0)">移除html页面</a-button>
      </a-space>
    </div>
  </div>
</template>
<script>
import { ipcApiRoute } from '@/api/main'
const remote = window.require('@electron/remote')
let shareObject = remote.getGlobal('shareObject')
const { fs, path, app } = shareObject
// var url = ''
// let result = ''

// fs.readFile('./public/gjdpt.js', async (err, data) => {
//   if (err) return console.error(err)
//   result = await data
//   var file = new File(result, 'gjdpt.js', {
//     type: 'application/x-javascript'
//   })
//   var reader = new FileReader()
//   reader.onload = function () {
//     url = reader.result
//   }
//   reader.readAsDataURL(file)
// })

export default {
  data() {
    return {
      url: '',
      views: [
        {
          type: 'web',
          content: 'https://m.jd.com/'
        },
        {
          type: 'web2',
          content: 'https://m.jd.com/'
        }
      ]
    }
  },
  methods: {
    loadViewContent(index) {
      const self = this
      self
        .$ipcInvoke(ipcApiRoute.loadViewContent, this.views[index])
        .then((r) => {
          console.log(r)
        })
    },
    removeViewContent(index) {
      const self = this
      self
        .$ipcInvoke(ipcApiRoute.removeViewContent, self.views[index])
        .then((r) => {
          console.log(r)
        })
    }
  }
}
</script>
<style lang="less" scoped>
#app-base-window-view {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
  }
}
</style>
