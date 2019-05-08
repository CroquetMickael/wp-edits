import React from "react";
import { Titlebar } from "../Component/Titlebar";
import { Content } from "../Component/Route/Router";
import { loadFontAwesomeLibraries } from "../Common/FontAwesome/Library";
loadFontAwesomeLibraries();
const App = () => (
  <>
    <Titlebar />
    <Content />
  </>
);
export { App };
