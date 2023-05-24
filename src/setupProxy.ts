import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://app.moussemyanmar.com/api",
    changeOrigin: true,
  })
);

app.use(
  "/secure-api",
  createProxyMiddleware({
    target: "https://app.knowthreats.com/api",
    changeOrigin: true,
  })
);

app.listen(3000);

// import express from "express";
// import { createProxyMiddleware } from "http-proxy-middleware";

// const app = express();

// app.use(
//   "/open-api",
//   createProxyMiddleware({
//     target: "https://moussemyanmar.com/api",
//     changeOrigin: true,
//   })
// );

// app.use(
//   "/secure-api",
//   createProxyMiddleware({
//     target: "https://knowthreats.com/api",
//     changeOrigin: true,
//   })
// );

// app.listen(3000);
