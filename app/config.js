module.exports = {
  dev: {
    host: {
      name: "localhost",
      port: 8000,
      api: {
        chatLog: "/some/endpoint/path",
        chatBan: "/some/endpoint/path"
      }
    } 
  },
  test: {
    host: {
      name: 'localhost',
      port: 8000,
      api: {
        chatLog: "/some/endpoint/path",
        chatBan: "/some/endpoint/path"
      }
    }     
  },
  prod: {
    host: {
      name: 'localhost',
      port: 8000,
      api: {
        chatLog: "/some/endpoint/path",
        chatBan: "/some/endpoint/path"
      }
    } 
  }
};

