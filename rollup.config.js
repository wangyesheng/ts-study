import { nodeResolve } from "@rollup/plugin-node-resolve"; // 解析第三方模块
import ts from "rollup-plugin-typescript2"; // 让 rollup 和 typescript 可以沟通的桥梁
import serve from "rollup-plugin-serve"; // 让 rollup 起一个服务，类似 webpack 的 devserver
import path from "path";

export default {
  input: "src/index.ts",
  output: {
    file: path.resolve(__dirname, "dist/bundle.js"),
    format: "iife",
    sourcemap: true, // 开启源码映射文件，同样 tsconfig.json 中的 `sourceMap` 选项也得启用
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
    ts({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    }),
    serve({
      port: 3000,
      contentBase: "", // 以根目录为基准
      openPage: "/public/index.html",
    }),
  ],
};
