import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  platform: 'neutral',
  dts: true,
  sourcemap: true,
  clean: true,
  exports: true, // يكتب main/types/exports في package.json تلقائياً
})
