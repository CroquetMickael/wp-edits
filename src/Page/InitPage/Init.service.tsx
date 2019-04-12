import { insert } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const InitService = (username: string, password: string, url: string) => {
  const db = new Database(dbPath);
  const InitAccount = insert()
    .into(table.user)
    .set("login", username)
    .set("password", password)
    .set("url", url)
    .toString();
  db.run(InitAccount);
  db.close();
};

export { InitService };
