const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://lanling.diumx.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/api", //重写接口
      },
      cookieDomainRewrite: "",
    })
  );
};
