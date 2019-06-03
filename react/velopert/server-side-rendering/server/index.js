const Koa = require("koa");
const serve = require("koa-static");
const path = require("path");
const fs = require("fs");
const app = new Koa();

// 파일 시스템으로, 빌드폴더의 index.html을 불러와서, csr에서 강력 새로고침시에도 빌드된 html을 보여줄 수 있게 한다.
const indexHtml = fs.readFileSync(
  path.resolve(__dirname, "../build/index.html"),
  { encoding: "utf8" }
);

app.use(serve(path.resolve(__dirname, "../build/")));
app.use(ctx => {
  ctx.body = indexHtml;
});

app.listen(3001);
