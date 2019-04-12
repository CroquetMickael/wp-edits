module.exports = {
  require: jest.genMockFromModule(),
  match: jest.genMockFromModule(),
  getPath: jest.mock(),
  app: jest.genMockFromModule(),
  remote: jest.genMockFromModule(),
  dialog: jest.genMockFromModule(),
  window: jest.genMockFromModule()
};