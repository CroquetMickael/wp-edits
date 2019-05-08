import { update } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const AccountSettingUsernameService = (newUsername: string, confirmNewUsername: string) => {
  if(newUsername == confirmNewUsername){
  const db = new Database(dbPath);
  const UpdateAccount = update()
    .where(table.user)//todo
    .set("login", newUsername)
    .toString();
  db.run(UpdateAccount);
  db.close();
  }
};

export { AccountSettingUsernameService };
