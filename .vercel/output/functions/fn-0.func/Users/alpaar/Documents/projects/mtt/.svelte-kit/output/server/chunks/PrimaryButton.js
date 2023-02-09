import { c as create_ssr_component, b as add_attribute, e as escape } from "./index2.js";
const PrimaryButton_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-1rntmv8{background-color:#ff705b;color:var(--text-primary);padding:12px 24px;border:none;border-radius:6px;font-weight:600;white-space:nowrap;transition:0.2s ease}button.svelte-1rntmv8:hover{opacity:0.8}",
  map: null
};
const PrimaryButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title, href } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  $$result.css.add(css);
  return `<a${add_attribute("href", href, 0)}><button class="${"svelte-1rntmv8"}">${escape(title)}</button></a>`;
});
export {
  PrimaryButton as P
};
