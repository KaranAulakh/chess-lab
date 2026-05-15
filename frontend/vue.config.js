const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Use the same host/port as the browser (e.g. 127.0.0.1 vs LAN IP) for HMR WebSocket
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
  },
});
