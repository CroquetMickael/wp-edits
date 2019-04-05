import { select } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const HomeService = async (setArticles: Function) => {
  const db = new Database(dbPath);
  const ArticlesQuery = select()
    .from(table.article)
    .toString();
  db.all(ArticlesQuery, (error: Error, rows) => {
    setArticles(rows);
  });
  db.close();
};

export { HomeService };
