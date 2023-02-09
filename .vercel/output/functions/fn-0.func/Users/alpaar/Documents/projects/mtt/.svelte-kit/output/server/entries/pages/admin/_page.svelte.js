import { c as create_ssr_component, t as each, b as add_attribute, e as escape } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".grid.svelte-4eympc.svelte-4eympc{display:grid;grid-template-columns:2fr 1fr;gap:5rem;margin-bottom:6rem}.new-art.svelte-4eympc.svelte-4eympc{display:flex;flex-direction:column;background-color:var(--secondary);padding:1rem;border-radius:12px}.new-art.svelte-4eympc input.svelte-4eympc,.new-art.svelte-4eympc textarea.svelte-4eympc{background-color:#383842;color:white;font-weight:600;border:none;border-radius:12px}textarea.svelte-4eympc.svelte-4eympc{border:none;min-width:372px;max-width:372px}article.svelte-4eympc.svelte-4eympc{background-color:#383842;margin-bottom:1rem;border-radius:12px}article.svelte-4eympc header.svelte-4eympc{font-weight:600;font-size:2rem}article.svelte-4eympc .controls.svelte-4eympc{display:flex;justify-content:flex-end;gap:1rem;padding:3px 10px 0 0;background-color:#4da8a8;border-radius:12px 12px 0 0;user-select:none}article.svelte-4eympc .art-content.svelte-4eympc{padding:0 1rem 1rem 1rem;color:var(--text-secondary)}article.svelte-4eympc .art-content header.svelte-4eympc{color:var(--text-primary)}.controls.svelte-4eympc button.svelte-4eympc{background-color:#ff705b;color:var(--text-primary);width:16px;height:16px;border:none;border-radius:100%;font-weight:600;white-space:nowrap;transition:0.2s ease;cursor:pointer}#edit.svelte-4eympc.svelte-4eympc{background-color:#ffcd1d}button.svelte-4eympc.svelte-4eympc:hover{opacity:0.8}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let articles;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ articles } = data);
  return `<h2>Articles:</h2>
<div class="${"grid svelte-4eympc"}"><div>${each(articles, (article) => {
    return `<article class="${"svelte-4eympc"}"><div class="${"controls svelte-4eympc"}"><a href="${"/" + escape(article.id, true)}" role="${"button"}" class="${"outline constrast"}"><button id="${"edit"}" class="${"svelte-4eympc"}"></button></a>
					<form action="${"?/deleteArticle&id=" + escape(article.id, true)}" method="${"POST"}"><button id="${"delete"}" type="${"submit"}" class="${"outline secondary svelte-4eympc"}"></button>
					</form></div>
				<div class="${"art-content svelte-4eympc"}"><header class="${"svelte-4eympc"}">${escape(article.title)}</header>
				<p>${escape(article.content)}
				</p></div>
			</article>`;
  })}</div>
	<form class="${"new-art svelte-4eympc"}" action="${"?/createArticle"}" method="${"POST"}"><h3>New Article</h3>
		<label for="${"title"}">Title </label>
		<input type="${"text"}" id="${"title"}" name="${"title"}" class="${"svelte-4eympc"}">
		<label for="${"title"}">Title </label>
		<textarea id="${"content"}" name="${"content"}"${add_attribute("rows", 5, 0)} class="${"svelte-4eympc"}"></textarea>
		<button type="${"submit"}" class="${"svelte-4eympc"}">Add Article</button></form>
</div>`;
});
export {
  Page as default
};
