module.exports = {
  webpack: {
    configure: {
      externals: {
        sqlite3: "commonjs sqlite3"
      },
      target: "electron-renderer"
    }
  }
};
