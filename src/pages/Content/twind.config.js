import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";

const presetRemToPx = ({ baseValue = 16 } = {}) => {
  return {
    finalize(rule) {
      return {
        ...rule,
        d: rule.d?.replace(
          /"[^"]+"|'[^']+'|url\([^)]+\)|(-?\d*\.?\d+)rem/g,
          (match, p1) => {
            if (p1 === undefined) return match;
            return `${p1 * baseValue}${p1 == 0 ? "" : "px"}`;
          }
        ),
      };
    },
  };
};

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind(), presetRemToPx()],
});