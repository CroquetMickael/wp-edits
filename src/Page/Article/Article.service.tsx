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
    let firstElement = rows.shift();
    setArticle(firstElement);
  });
  db.close();
};

export { ArticleService };
