module.exports = {
  dev: {
    host: {
      name: "localhost",
      port: 8000,
      api: {
        chatLog: "/js/chat_log",
        chatBan: "/js/chat_bans"
      }
    } 
  },
  test: {
    host: {
      name: 'localhost',
      port: 8000
    }     
  },
  prod: {
    host: {
      name: 'localhost',
      port: 8000
    } 
  }
};

