import { update } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const AccountSettingPasswordService = (newPassword: string, confirmNewPassword: string) => {
  if(newPassword == confirmNewPassword){
  const db = new Database(dbPath);
  const UpdateAccount = update()
    .where(table.user)
    .set("password", newPassword)
    .toString();
  db.run(UpdateAccount);
  db.close();
  }
};

export { AccountSettingPasswordService };
