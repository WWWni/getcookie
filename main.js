const Appliaction = require("ee-core").Appliaction;
const app = require("electron").app;
const electron = require("electron");
const { dialog } = require("electron");
const fs = require("fs");
const path = require("path");
const remote = require("@electron/remote/main"); //1
global.shareObject = {
  fs: fs,
  path: path,
  app: app,
  dialog: dialog,
};
class Main extends Appliaction {
  constructor() {
    super();
    // this === eeApp;
  }

  /**
   * core app have been loaded
   */
  async ready() {
    // do some things
  }

  /**
   * electron app ready
   */
  async electronAppReady() {
    // do some things
  }

  /**
   * main window have been loaded
   */
  async windowReady() {
    // do some things
    // 延迟加载，无白屏
    const winOpt = this.config.windowsOption;
    if (winOpt.show == false) {
      const win = this.electron.mainWindow;
      win.once("ready-to-show", () => {
        win.show();
      });
    }
    remote.initialize();
    remote.enable(this.electron.mainWindow.webContents); //3
    const Menu = electron.Menu;
    // Menu.setApplicationMenu(null);

    this.electron.mainWindow.on("close", (event) => {
      app.quit();
    });
  }

  /**
   * before app close
   */
  async beforeClose() {
    // do some things
  }
}

new Main();
