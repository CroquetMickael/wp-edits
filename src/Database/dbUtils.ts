import path from "path";
import { remote } from "electron";

const dbPath = path.join(remote.app.getPath("userData"), "/wpEdits.db.sqlite");

const table = {
  user: "User",
  article: "Article"
};
export { dbPath, table };
