const {build} = require("esbuild");
const path = require('path');
const {dependencies} = require("./package.json");

[
  'src/index.jsx',
  'src/components/ReportAProblem.jsx',
].forEach(entryPoint => {
  const shared = {
    bundle: true,
    entryPoints: [],
    // Treat all dependencies in package.json as externals to keep bundle size to a minimum
    external: Object.keys(dependencies),
    logLevel: "info",
    minify: true,
    sourcemap: true,
  };

  build({
    ...shared,
    entryPoints: [entryPoint],
    format: "esm",
    outfile: `./dist/${path.parse(entryPoint).name}.esm.js`,
    target: ["esnext", "node16"],
  });

  build({
    ...shared,
    format: "cjs",
    outfile: `./dist/${path.parse(entryPoint).name}.cjs.js`,
    target: ["esnext", "node16"],
  });
})
