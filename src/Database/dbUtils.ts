import path from "path";
import { remote } from "electron";
const userDataPath = remote.app.getPath("userData");
const dbPath = path.join(userDataPath,"/wpEdits.db.sqlite");

const table = {
  article: "Article",
  user: "User"
};
export { dbPath, table };
