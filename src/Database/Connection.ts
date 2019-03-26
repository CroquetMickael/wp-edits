import path from "path";
import { remote } from "electron";
import { Database } from "sqlite3";
import squel from "squel";
import { InitQuery } from "./InitQuery";
import { navigate } from "@reach/router";
let dbPath = path.join(remote.app.getPath("userData"), "/wpEdits.db.sqlite");
const functions = {
  tryConnectBdd: function() {
    let db = new Database(dbPath, err => {
      if (err) {
        console.log(err.message);
      } else {
        let select = squel.select();
        db.get(select.from("User").toString(), (err, row) => {
          if (err) {
            db.run(InitQuery.sqlUser);
            db.run(InitQuery.sqlPage);
            db.run(InitQuery.sqlImage);
            navigate("/initUser");
            return console.error(err.message);
          } else if (row != null) {
            if (window.location.pathname != "/") {
              navigate("/");
            }
          }
        });
      }
    });
  }
};

export { functions };
