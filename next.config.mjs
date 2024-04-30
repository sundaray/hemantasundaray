import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { visit } from "unist-util-visit";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
};

const options = {
  theme: "night-owl",
  // keepBackground: false,
  defaultLang: {
    block: "plaintext",
    inline: "plaintext",
  },
  tokensMap: {
    fn: "entity.name.function",
    str: "string",
    num: "constant.numeric",
    bool: "constant.language.boolean",
    tag: "entity.name.tag",
    comp: "support.class.component",
    param: "variable.parameter",
    alias: "meta.type-alias",
    var: "variable.other.readwrite",
    kw: "keyword",
    op: "keyword.operator",
    cls: "entity.name.class",
    objProp: "meta.property.object",
    attr: "entity.other.attribute-name",
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;

            if (codeEl.tagName !== "code") {
              return;
            }

            node.raw = codeEl.children?.[0].value;
          }
        });
      },
      [rehypePrettyCode, options],
    ],
  },
});

export default withMDX(nextConfig);
