module.exports = {
  webpack: {
    configure: {
      externals: {
        sqlite3: "commonjs sqlite3",
        squel: "commonjs squel"
      },
      target: "electron-renderer"
    }
  }
};
