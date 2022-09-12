import { build } from 'esbuild';
import chokidar from 'chokidar';
import liveServer from 'live-server';

void (async () => {
  const builder = await build({
    bundle: true,
    // Defines env variables for bundled JavaScript; here `process.env.NODE_ENV`
    // is propagated with a fallback.
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'development'
      )
    },
    entryPoints: ['src/dev.tsx'],
    // Uses incremental compilation (see `chokidar.on`).
    incremental: true,
    // Removes whitespace, etc. depending on `NODE_ENV=...`.
    minify: process.env.NODE_ENV === 'production',
    outfile: 'public/script.js',
    sourcemap: true
  });
  // `chokidar` watcher source changes.
  chokidar
    // Watches TypeScript and React TypeScript.
    .watch('src/**/*.{js,tsx}', {
      interval: 0 // No delay
    })
    // Rebuilds esbuild (incrementally -- see `build.incremental`).
    .on('all', () => {
      void builder.rebuild();
    });
  // `liveServer` local server for hot reload.
  liveServer.start({
    // Opens the local server on start.
    open: true,
    // Uses `PORT=...` or 8080 as a fallback.
    port: parseInt(process.env.PORT ?? '8080', 10),
    // Uses `public` as the local server folder.
    root: 'public'
  });
})();
