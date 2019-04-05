import { select } from "squel";
import { table, dbPath } from "../../Database/dbUtils";
import { Database } from "sqlite3";

const ArticleService = async (setArticle: Function, id: number) => {
  const db = new Database(dbPath);
  const ArticleQuery = select()
    .from(table.article)
    .where("id = ?", id)
    .toString();
  db.all(ArticleQuery, (error: Error, rows) => {
    setArticle(rows[0]);
  });
  db.close();
};

export { ArticleService };
