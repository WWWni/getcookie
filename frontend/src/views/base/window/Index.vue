<template>
  <div id="app-base-window">
    <div class="one-block-1">
      <span> 1.登录 </span>
    </div>
    <div class="one-block-2">
      <a-space>
        <a-button @click="createWindow(0)">打开京东</a-button>
      </a-space>
    </div>
    <div class="one-block-1">
      <span> 2. 登录后获取cookie </span>
    </div>
    <div class="one-block-2">
      <a-space>
        <a-button @click="getCookies()">获取cookie</a-button>
      </a-space>
    </div>
    <div class="one-block-2">
      <a-space>
        pt_key:<a-input v-model="pt_key" style="width: 700px"></a-input>
      </a-space>
    </div>
    <div class="one-block-2">
      <a-space>
        pt_pin:<a-input v-model="pt_pin" style="margin-left: 3px"> </a-input
      ></a-space>
    </div>
  </div>
</template>
<script>
import { ipcApiRoute } from '@/api/main'
const remote = window.require('@electron/remote')
let shareObject = remote.getGlobal('shareObject')
const { dialog } = shareObject
export default {
  data() {
    return {
      pt_key: '',
      pt_pin: '',
      views: [
        {
          type: 'web',
          content: 'https://m.jd.com/'
        },
        {
          type: 'html',
          content: '/public/html/view_example.html'
        }
      ]
    }
  },
  methods: {
    getCookies() {
      let that = this
      function uniqueJsonArr(jsonArr, key, value) {
        let result = ''
        for (let i = 0; i < jsonArr.length; i++) {
          let temp = jsonArr[i]
          if (temp[key] == value) {
            result = temp.value
          }
        }
        return result
      }
      this.$ipcInvoke(ipcApiRoute.getCookies).then((r) => {
        let cookies = JSON.parse(r)
        that.pt_key = uniqueJsonArr(cookies, 'name', 'pt_key')
        that.pt_pin = uniqueJsonArr(cookies, 'name', 'pt_pin')
      })
    },
    createWindow(index) {
      this.$ipcInvoke(ipcApiRoute.createWindow, this.views[index]).then((r) => {
        if (r === false) {
          dialog.showErrorBox('提示', '请勿重复打开')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
#app-base-window {
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
