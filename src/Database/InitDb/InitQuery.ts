export const InitQuery = {
  sqlPage:
    "CREATE TABLE if not exists Article(" +
    "id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "contenu       TEXT ," +
    "statut       TEXT ," +
    "image_entete  BLOB ," +
    "titre         TEXT" +
    ");",
  sqlUser:
    "CREATE TABLE if not exists User(" +
    "id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "login          TEXT ," +
    "password       TEXT ," +
    "url TEXT" +
    ")"
};
