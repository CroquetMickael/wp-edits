import { select } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";
import { navigate } from "@reach/router";

const AuthService = {
  login: async (
    username: string,
    password: string,
    setIsAuth: Function,
    setCallback: Function
  ) => {
    if (username != "" && password != "") {
      const db = new Database(dbPath);
      const checkUser = select()
        .from(table.user)
        .where("login = ?", username)
        .where("password = ?", password)
        .toString();
      db.get(checkUser, [], (error: Error, rows) => {
        if (rows != null && rows != undefined && rows != []) {
          setIsAuth(true);
          navigate("/home");
        } else {
          setCallback("Mauvais Username et/ou Mot de passe");
          setTimeout(function(){
            setCallback('\u00A0')
        }, 5000);
        }
      });
    }
  }
};

export { AuthService };
