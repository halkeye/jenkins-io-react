import {build} from "esbuild";
import {nodeExternalsPlugin} from 'esbuild-node-externals';
import path from 'path';

[
  'src/index.tsx',
  // 'src/makeLayout.ts', // platform: 'node'
  'src/components/ReportAProblem.tsx',
  'src/components/SiteVersion.tsx',
  'src/components/ImproveThisPage.tsx',
].forEach(entryPoint => {
  const shared = {
    bundle: true,
    entryPoints: [entryPoint],
    loader: {'.js': 'jsx', '.ts': 'tsx'},
    logLevel: "info",
    minify: true,
    sourcemap: true,
  };

  build({
    ...shared,
    format: "esm",
    outfile: `./dist/${path.parse(entryPoint).name}.esm.js`,
    target: ["esnext", "node16"],
    plugins: [nodeExternalsPlugin()]
  });

  build({
    ...shared,
    format: "cjs",
    outfile: `./dist/${path.parse(entryPoint).name}.cjs.js`,
    target: ["esnext", "node16"],
    plugins: [nodeExternalsPlugin()]
  });
})
