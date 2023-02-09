import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-36zh51{font-size:2rem;font-weight:600;padding:0 1rem}",
  map: null
};
let src = "https://cdn.pixabay.com/photo/2022/12/22/02/56/heron-7671357_960_720.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let doubled;
  let hTest = "<h2>This is html insertion!</h2>\n<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione impedit sint pariatur nisi totam obcaecati eveniet neque aliquam animi modi.</p>";
  let count = 0;
  $$result.css.add(css);
  doubled = count * 2;
  return `<main><h1>Tutorial</h1>
	<img${add_attribute("src", src, 0)} alt="${"A heron"}">
	<p><!-- HTML_TAG_START -->${hTest}<!-- HTML_TAG_END --></p>

	<h2>Counter</h2>
	<h1>${escape(count)} | ${escape(doubled)}</h1>
	<button class="${"svelte-36zh51"}">+</button>
	<button class="${"svelte-36zh51"}">-</button>
	<button class="${"svelte-36zh51"}">reset</button>
</main>`;
});
export {
  Page as default
};
