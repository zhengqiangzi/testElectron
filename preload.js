const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld('preload', {

  process,
  msg: () => ipcRenderer.invoke("msg")

})