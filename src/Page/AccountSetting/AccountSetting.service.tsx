import { update } from "squel";
import { dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";
import { navigate } from "@reach/router";

const AccountSettingsService= {

  AccountSettingPasswordService: (newPassword: string, confirmNewPassword: string, id: number) => {
    if (newPassword == confirmNewPassword) {
      const db = new Database(dbPath);
      const UpdateAccount = update()
        .table("user")
        .where("id = ?", id)
        .set("password", newPassword)
        .toString();
      db.run(UpdateAccount);
      db.close();
    }
  },
  AccountSettingUrlService: (newUrl: string, confirmNewUrl: string, id: number) => {
    if (newUrl == confirmNewUrl) {
      const db = new Database(dbPath);
      const UpdateAccount = update()
        .table("user")
        .where("id = ?", id)
        .set("url", newUrl)
        .toString();
      db.run(UpdateAccount);
      db.close();
    }
  },
  AccountSettingUsernameService: (newUsername: string, confirmNewUsername: string, id: number) => {
    if(newUsername == confirmNewUsername){
    const db = new Database(dbPath);
    const UpdateAccount = update()
      .table("user")
      .where("id = ?", id)
      .set("login", newUsername)
      .toString();
    db.run(UpdateAccount);
    db.close();
    }
  }
}

export { AccountSettingsService };
