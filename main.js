const { app, BrowserWindow, ipcMain, Menu, Tray, nativeImage } = require("electron")

const path = require("path")
let _menuList = [{

  label: "退出",
  click: () => {
    console.log(process.platform)

    app.quit()
  },
  accelerator: "Ctrl+I"

}, {
  label: "字菜单",
  submenu: [{
    label: "重新加载",
    click: (e, _win) => {
      _win.reload()

    },
    accelerator: "Alt+Shift+I"
  }, {
    label: "最小化",
    click: (e, _win) => {
      _win.minimize();

    }
  }, {

    label: "最大化",
    click: (e, _win) => {

      _win.maximize();

    }
  }]

}]
const menu = Menu.buildFromTemplate(_menuList)

app.whenReady().then(() => {
  https://codeup.aliyun.com/xm/test/client.git

  app.setUserTasks([
    {
      program: process.execPath,
      arguments: '--new-window',
      iconPath: process.execPath,
      iconIndex: 0,
      title: 'New Window',
      description: 'Create a new window'
    }
  ])

  const win = new BrowserWindow({
    fullscreen: false,
    movable: true,
    minimizable: true,
    maximizable: true,
    closable: true,
    title: "test",
    icon: "./favicon.ico",
    darkTheme: true,
    webPreferences: {

      preload: path.join(__dirname, "preload.js")
    }
  })
  win.once('focus', () => win.flashFrame(false))
  win.flashFrame(true)



  // let i = 0
  // setInterval(() => {
  //   i++
  //   win.setProgressBar(i)


  // }, 100)

  // win.setThumbarButtons([
  //   {
  //     tooltip: 'button1',
  //     icon: path.join(__dirname, 'button1.png'),
  //     click () { console.log('button1 clicked') }
  //   }, {
  //     tooltip: 'button2',
  //     icon: path.join(__dirname, 'button2.png'),
  //     flags: ['enabled', 'dismissonclick'],
  //     click () { console.log('button2 clicked.') }
  //   }
  // ])

  const icon = nativeImage.createFromPath("./favicon.ico")
  let tray = new Tray(icon);
  tray.on("click", () => {
    //  console.log(1111111)
    win.show();
  })
  tray.setTitle("click me!")
  tray.setToolTip("aaaaaaaaaa")
  // tray.setContextMenu(menu)
  win.loadFile("./front/index.html")
  console.log('app WhenRady done')
})

app.on("window-all-closed", () => {
  console.log('window all closed')
  app.quit();
})
ipcMain.handle("msg", (e) => {
  // console.log(e)

  return 'msg from ipcMain'
})



Menu.setApplicationMenu(menu)