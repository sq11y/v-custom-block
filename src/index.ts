import type { PluginOption } from "vite";

/**
 * Add custom blocks to Vue components.
 *
 * @param {string} tag The tag to be used e.g. docs for <docs /> blocks
 */
export default (tag: string): PluginOption => ({
  name: `${tag}-block`,
  enforce: "pre",

  /**
   * @see https://github.com/vitejs/vite-plugin-vue/blob/main/packages/plugin-vue/README.md#example-for-transforming-custom-blocks
   */
  transform(_, id) {
    if (!tag) {
      console.error("The `tag` argument is required for v-custom-block");
      return;
    }

    if (id.includes(`vue&type=${tag}`)) {
      return "export default Component => {}";
    }
  },
});
