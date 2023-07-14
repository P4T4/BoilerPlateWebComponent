const concat = require("concat");
(async function build() {
  const files = [
    "./dist/wc-boilerplate-example/runtime.js",
    "./dist/wc-boilerplate-example/main.js",
  ];

  await concat(
    files,
    "./dist/wc-boilerplate-example/wc-boilerplate-example.js",
  );
})();
