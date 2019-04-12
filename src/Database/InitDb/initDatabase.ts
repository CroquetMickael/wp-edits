import { select } from "squel";
import { InitQuery } from "./InitQuery";
import { dbPath } from "../dbUtils";
import { navigate } from "@reach/router";
import { Database } from "sqlite3";
import {table} from '../dbUtils'
const initDatabase = () => {
  const db = new Database(dbPath);
  db.get(
    select()
      .from(table.user)
      .toString(),
    (err, row) => {
      if (err) {
        db.run(InitQuery.sqlUser);
        db.run(InitQuery.sqlPage);
        db.close();
        navigate("/initUser");
        return console.error(err.message);
      } else if (row != null) {
        db.close();
        if (window.location.pathname != "/") {
          navigate("/");
        }
      }
    }
  );
};

export { initDatabase };
