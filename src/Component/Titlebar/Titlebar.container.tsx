import Titlebar from "./Titlebar.component";
import React from "react";
import Electron from "electron";

declare global {
  interface Window {
    require: any;
  }
}
const remote = Electron.remote;
const titleBarFunction = {
  onMinimize: () => {
    const window = remote.getCurrentWindow();
    window.minimize();
  },
  onMaximize: () => {
    const window = remote.getCurrentWindow();
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  },
  onClose: () => {
    const window = remote.getCurrentWindow();
    window.close();
  }
};

const titlebar = () => <Titlebar {...titleBarFunction} />;

export default titlebar;
