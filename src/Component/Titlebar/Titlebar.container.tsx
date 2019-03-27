import { TitleBarComponent } from "./Titlebar.component";
import React from "react";
import Electron from "electron";

const remote = Electron.remote;
const titleBarFunction = {
  onClose: () => {
    const window = remote.getCurrentWindow();
    window.close();
  },
  onMaximize: () => {
    const window = remote.getCurrentWindow();
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  },
  onMinimize: () => {
    const window = remote.getCurrentWindow();
    window.minimize();
  }
};

const TitleBarContainer = () => <TitleBarComponent {...titleBarFunction} />;

export { TitleBarContainer };
