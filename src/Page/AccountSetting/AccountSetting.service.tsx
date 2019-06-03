import { update } from "squel";
import { dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";
import { navigate } from "@reach/router";


const AccountSettingsService = (newValue: string, confirmNewValue: string, id: number,  type: string) => {
  if (newValue == confirmNewValue) {
    const db = new Database(dbPath);
    const UpdateAccount = update()
      .table("user")
      .where("id = ?", id)
      .set(type, newValue)
      .toString();
    db.run(UpdateAccount);
    db.close();
  }
}


export { AccountSettingsService };
