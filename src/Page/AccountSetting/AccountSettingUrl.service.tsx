import { update } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const AccountSettingUrlService = (newUrl: string, confirmNewUrl: string) => {
  if(newUrl == confirmNewUrl){
  const db = new Database(dbPath);
  const UpdateAccount = update()
    .where(table.user)//todo
    .set("url", newUrl)
    .toString();
  db.run(UpdateAccount);
  db.close();
  }
};

export { AccountSettingUrlService };
