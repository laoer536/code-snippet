import DefaultTheme from "vitepress/theme";
import { inBrowser, useData } from "vitepress";
// @ts-ignore
import { watchEffect } from "vue";

export default {
  extends: DefaultTheme,
  setup() {
    const { lang } = useData();
    watchEffect(() => {
      if (inBrowser) {
        document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`;
      }
    });
  },
};
