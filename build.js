const {build} = require("esbuild");
const path = require('path');
const {dependencies} = require("./package.json");

[
  'src/index.jsx',
  // 'src/makeLayout.js', // platform: 'node'
  'src/components/ReportAProblem.jsx',
  'src/components/SiteVersion.jsx',
  'src/components/ImproveThisPage.jsx',
].forEach(entryPoint => {
  const shared = {
    bundle: true,
    entryPoints: [entryPoint],
    loader: {'.js': 'jsx'},
    // Treat all dependencies in package.json as externals to keep bundle size to a minimum
    external: Object.keys(dependencies),
    logLevel: "info",
    minify: true,
    sourcemap: true,
  };

  build({
    ...shared,
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
