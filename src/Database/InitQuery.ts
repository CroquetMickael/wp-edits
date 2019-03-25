const InitQuery = {
  sqlUser:
    "CREATE TABLE if not exists User(" +
    "id             INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "login          TEXT ," +
    "password       TEXT ," +
    "url_wordpress  TEXT ," +
    "image_profil  NONE ," +
    "image_bg  NONE ," +
    "tutoriel       INTEGER" +
    ")",
  sqlPage:
    "CREATE TABLE if not exists page(" +
    "id            INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "contenu       TEXT ," +
    "statut       TEXT ," +
    "read       TEXT ," +
    "image_entete  NONE ," +
    "titre         TEXT " +
    ");",
  sqlImage:
    "CREATE TABLE if not exists image_page(" +
    "    id       INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ," +
    "    image    NONE ," +
    "    id_page  INTEGER," +
    "    FOREIGN KEY (id_page) REFERENCES page(id)" +
    "    );"
};

export { InitQuery };
