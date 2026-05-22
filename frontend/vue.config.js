const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: "::",
    port: 8080,
    allowedHosts: "all",
    client: {
      // Override Vue CLI’s LAN-IP HMR default when host is unspecified; use page host.
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
  },
});
