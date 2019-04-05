import { select } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";
const BlogConnectService = (setUrl: Function) => {
  const db = new Database(dbPath);
  const UrlQuery = select()
    .from(table.user)
    .field("url")
    .toString();
  db.all(UrlQuery, (error: Error, rows) => {
    setUrl(rows[0].url);
  });
  db.close();
};

export { BlogConnectService };
