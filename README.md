# v-custom-block

`v-custom-block` lets you ignore custom blocks in Vue.

```ts
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import customBlock from "v-custom-block";

export default defineConfig({
  plugins: [vue(), customBlock("docs")],
});
```
