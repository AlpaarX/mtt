import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { P as PrimaryButton } from "../../chunks/PrimaryButton.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-12wzmni.svelte-12wzmni{background-color:var(--secondary);border-radius:12px;padding:2.25rem;display:flex;margin:0 auto;display:flex;flex-direction:column}.top.svelte-12wzmni.svelte-12wzmni{margin-bottom:2rem}.top.svelte-12wzmni h1.svelte-12wzmni{letter-spacing:-2px}.top.svelte-12wzmni p.svelte-12wzmni{color:var(--text-secondary);font-weight:500;font-size:20px}.bottom.svelte-12wzmni.svelte-12wzmni{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.socials.svelte-12wzmni.svelte-12wzmni{display:flex}.socials.svelte-12wzmni a img.svelte-12wzmni{width:24px;margin:0 12px}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="${"svelte-12wzmni"}"><div class="${"top svelte-12wzmni"}"><h1 class="${"svelte-12wzmni"}">More Than Trust</h1>
		<p class="${"svelte-12wzmni"}">A recruiting company.</p></div>
	<div class="${"bottom svelte-12wzmni"}"><p>2023 © Copyright Mtt LLC</p>
		<div class="${"socials svelte-12wzmni"}"><a href="${"https://www.linkedin.com/company/mtt-llc/"}" target="${"_blank"}" rel="${"noreferrer"}"><img src="${"social-icon/instagram.svg"}" alt="${"Instagram"}" class="${"svelte-12wzmni"}"></a>
			<a href="${"https://www.instagram.com/mtt.az/"}" target="${"_blank"}" rel="${"noreferrer"}"><img src="${"social-icon/linkedin.svg"}" alt="${"LinkedIn"}" class="${"svelte-12wzmni"}"></a></div></div>
</footer>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-yryn22.svelte-yryn22{position:sticky;top:0;left:0;background-color:var(--primary);user-select:none}.navbar.svelte-yryn22.svelte-yryn22,.nav-wrap.svelte-yryn22.svelte-yryn22{display:flex;flex-direction:row;align-items:center}.navbar.svelte-yryn22.svelte-yryn22{justify-content:space-between;width:100%;max-width:1296px;margin:0 auto}.navbar.svelte-yryn22 img.svelte-yryn22{max-width:180px;padding-right:1rem}header.svelte-yryn22 nav a.svelte-yryn22{padding:0 0.5rem;color:var(--text-secondary);font-weight:600;transition:0.2s ease;scroll-margin-top:100px}header.svelte-yryn22 nav a.svelte-yryn22:hover{color:white}@media only screen and (max-width: 1023px){nav.svelte-yryn22.svelte-yryn22,.controls.svelte-yryn22.svelte-yryn22{display:none}.navbar.svelte-yryn22.svelte-yryn22{justify-content:center}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header tabindex="${"-1"}" class="${"svelte-yryn22"}"><div class="${"navbar svelte-yryn22"}"><div class="${"nav-wrap svelte-yryn22"}"><a href="${"/"}" class="${"svelte-yryn22"}"><img src="${"logo.png"}" alt="${"mtt logo"}" class="${"svelte-yryn22"}"></a>
			<nav class="${"svelte-yryn22"}"><a href="${"/#consultants"}" class="${"svelte-yryn22"}">Consultants</a>
				<a href="${"/#services"}" class="${"svelte-yryn22"}">Services</a>
				<a href="${"/#hrci"}" class="${"svelte-yryn22"}">HRCI Certification</a>
				<a href="${"/#digitaltools"}" class="${"svelte-yryn22"}">Digital tools</a>
				<a href="${"/#vacancies"}" class="${"svelte-yryn22"}">Vacancies</a>
				<a href="${"/#clients"}" class="${"svelte-yryn22"}">Our clients</a>
				</nav></div>
		<div class="${"controls svelte-yryn22"}">
			${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { title: "Login", href: "/admin" }, {}, {})}
			
			${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { title: "Contact us", href: "/" }, {}, {})}</div></div>
</header>`;
});
const MobileNav_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-fu7y4i.svelte-fu7y4i{display:grid;grid-template-columns:repeat(4, 1fr);position:sticky;bottom:0;left:0;width:100%;background-color:var(--primary);user-select:none;visibility:hidden}footer.svelte-fu7y4i a.svelte-fu7y4i{display:flex;flex-direction:column;align-items:center;text-align:center;padding:1.2rem 0}footer.svelte-fu7y4i span.svelte-fu7y4i{color:var(--text-secondary)}footer.svelte-fu7y4i span.svelte-fu7y4i:active{color:var(--text-primary)}@media only screen and (max-width: 1023px){footer.svelte-fu7y4i.svelte-fu7y4i{visibility:visible}}",
  map: null
};
const MobileNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-fu7y4i"}"><a href="${"#consultants"}" class="${"svelte-fu7y4i"}">
		<span class="${"svelte-fu7y4i"}">Consultants</span></a>

	<a href="${"#services"}" class="${"svelte-fu7y4i"}">
		<span class="${"svelte-fu7y4i"}">Services</span></a>

	

	<a href="${"#vacancies"}" class="${"svelte-fu7y4i"}">
		<span class="${"svelte-fu7y4i"}">Vacancies</span></a>

	

	

	<a href="${"#clients"}" class="${"svelte-fu7y4i"}">
		<span class="${"svelte-fu7y4i"}">Clients</span></a>

	
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1xnga7o_START --><script src="${"https://kit.fontawesome.com/16355e4ba0.js"}" crossorigin="${"anonymous"}"><\/script><!-- HEAD_svelte-1xnga7o_END -->`, ""}

<div class="${"layout"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main>${slots.default ? slots.default({}) : ``}
		${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>
	${validate_component(MobileNav, "MobileNav").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
