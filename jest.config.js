module.exports = {
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  preset: "ts-jest",
  moduleNameMapper: {
    electron: "<rootDir>__mocks__/electron.js"
  }
};
