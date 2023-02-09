import { c as create_ssr_component, v as validate_component, l as listen, f as bubble, p as prevent_default, h as stop_propagation, i as compute_rest_props, j as get_current_component, k as spread, o as escape_object, b as add_attribute, m as missing_component, q as createEventDispatcher, d as subscribe, s as setContext, r as globals, g as getContext, n as noop } from "../../chunks/index2.js";
import { P as PrimaryButton } from "../../chunks/PrimaryButton.js";
import { w as writable } from "../../chunks/index.js";
const ConsCard_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".card.svelte-1xn8kx3.svelte-1xn8kx3{border-radius:12px;background-color:var(--secondary);padding:1.5rem;text-align:center;max-width:422px}.card.svelte-1xn8kx3 img.svelte-1xn8kx3{width:150px;border-radius:100%;margin:0 auto}.card.svelte-1xn8kx3 p.svelte-1xn8kx3{color:var(--text-secondary);margin-bottom:1rem}",
  map: null
};
const ConsCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"card svelte-1xn8kx3"}"><img src="${"Nargiz.jpg"}" alt="${""}" class="${"svelte-1xn8kx3"}">
	<h1 class="${"svelte-1xn8kx3"}">Nargiz Khanjanbayova</h1>
	<p class="${"svelte-1xn8kx3"}">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, modi voluptate iure provident
		autem qui dolorum vero aliquam est tempore dignissimos porro rerum, facere debitis, ad assumenda
		natus quidem laborum.
	</p>
    ${validate_component(PrimaryButton, "PrimaryButton").$$render($$result, { title: "Hire me", href: "" }, {}, {})}
</div>`;
});
const ConsList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".grid.svelte-tw273f{display:grid;gap:1rem;justify-content:center;margin-bottom:6rem}@media(min-width: 40em){.grid.svelte-tw273f{grid-template-columns:repeat(2, 1fr)}}@media(min-width: 65em){.grid.svelte-tw273f{grid-template-columns:repeat(3, 1fr)}}",
  map: null
};
const ConsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div class="${"grid svelte-tw273f"}">${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
	${validate_component(ConsCard, "ConsCard").$$render($$result, {}, {}, {})}
</div>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".hero.svelte-u6uy2o.svelte-u6uy2o{max-width:964px;margin:144px auto}@media only screen and (max-width: 768px){.hero.svelte-u6uy2o.svelte-u6uy2o{margin:72px 0}}.hero.svelte-u6uy2o h1.svelte-u6uy2o{font-size:88px;line-height:88px;font-weight:700;letter-spacing:-0.02em;margin-bottom:36px}@media screen and (max-width: 991px){.hero.svelte-u6uy2o h1.svelte-u6uy2o{font-size:72px;line-height:72px}}@media screen and (max-width: 767px){.hero.svelte-u6uy2o h1.svelte-u6uy2o{font-size:54px;line-height:54px}}.hero.svelte-u6uy2o h5.svelte-u6uy2o{color:#ff715b;margin-bottom:24px;font-size:20px;line-height:28px;font-weight:600}.hero.svelte-u6uy2o h3.svelte-u6uy2o{color:hsla(0, 0%, 100%, 0.5);font-size:32px;line-height:40px;font-weight:600;letter-spacing:-0.02em}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"hero svelte-u6uy2o"}"><h5 class="${"svelte-u6uy2o"}">Founded in 2018</h5>
	<h1 class="${"svelte-u6uy2o"}">Trust is our key to success!</h1>
	<div><h3 class="${"svelte-u6uy2o"}"><span style="${"color: white;"}">More Than Trust</span> is made up of independent, local and foreign
			business professionals providing business solutions.
		</h3></div>
</div>`;
});
var State;
(function(State2) {
  State2[State2["Open"] = 0] = "Open";
  State2[State2["Closed"] = 1] = "Closed";
})(State || (State = {}));
let id = 0;
function generateId() {
  return ++id;
}
function useId() {
  return generateId();
}
var Keys;
(function(Keys2) {
  Keys2["Space"] = " ";
  Keys2["Enter"] = "Enter";
  Keys2["Escape"] = "Escape";
  Keys2["Backspace"] = "Backspace";
  Keys2["ArrowLeft"] = "ArrowLeft";
  Keys2["ArrowUp"] = "ArrowUp";
  Keys2["ArrowRight"] = "ArrowRight";
  Keys2["ArrowDown"] = "ArrowDown";
  Keys2["Home"] = "Home";
  Keys2["End"] = "End";
  Keys2["PageUp"] = "PageUp";
  Keys2["PageDown"] = "PageDown";
  Keys2["Tab"] = "Tab";
})(Keys || (Keys = {}));
var Focus$1;
(function(Focus2) {
  Focus2[Focus2["First"] = 1] = "First";
  Focus2[Focus2["Previous"] = 2] = "Previous";
  Focus2[Focus2["Next"] = 4] = "Next";
  Focus2[Focus2["Last"] = 8] = "Last";
  Focus2[Focus2["WrapAround"] = 16] = "WrapAround";
  Focus2[Focus2["NoScroll"] = 32] = "NoScroll";
})(Focus$1 || (Focus$1 = {}));
var FocusResult;
(function(FocusResult2) {
  FocusResult2[FocusResult2["Error"] = 0] = "Error";
  FocusResult2[FocusResult2["Overflow"] = 1] = "Overflow";
  FocusResult2[FocusResult2["Success"] = 2] = "Success";
  FocusResult2[FocusResult2["Underflow"] = 3] = "Underflow";
})(FocusResult || (FocusResult = {}));
var Direction;
(function(Direction2) {
  Direction2[Direction2["Previous"] = -1] = "Previous";
  Direction2[Direction2["Next"] = 1] = "Next";
})(Direction || (Direction = {}));
var FocusableMode;
(function(FocusableMode2) {
  FocusableMode2[FocusableMode2["Strict"] = 0] = "Strict";
  FocusableMode2[FocusableMode2["Loose"] = 1] = "Loose";
})(FocusableMode || (FocusableMode = {}));
var StackMessage;
(function(StackMessage2) {
  StackMessage2[StackMessage2["Add"] = 0] = "Add";
  StackMessage2[StackMessage2["Remove"] = 1] = "Remove";
})(StackMessage || (StackMessage = {}));
const MODIFIER_DIVIDER = "!";
const modifierRegex = new RegExp(`^[^${MODIFIER_DIVIDER}]+(?:${MODIFIER_DIVIDER}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);
function forwardEventsBuilder(component, except = []) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    for (let exception of except) {
      if (typeof exception === "string" && exception === eventType) {
        const callbacks = component.$$.callbacks[eventType] || (component.$$.callbacks[eventType] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      if (typeof exception === "object" && exception["name"] === eventType) {
        let oldCallback = callback;
        callback = (...props) => {
          if (!(typeof exception === "object" && exception["shouldExclude"]())) {
            oldCallback(...props);
          }
        };
      }
    }
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const modifierMatch = eventType.match(modifierRegex);
      if (modifierMatch) {
        const parts = eventType.split(MODIFIER_DIVIDER);
        eventType = parts[0];
        const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
const components = [
  "a",
  "address",
  "article",
  "aside",
  "b",
  "bdi",
  "bdo",
  "blockquote",
  "button",
  "cite",
  "code",
  "data",
  "datalist",
  "dd",
  "dl",
  "dt",
  "div",
  "em",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "i",
  "input",
  "label",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "section",
  "span",
  "strong",
  "ul"
];
function isValidElement(element) {
  return !(typeof element === "string" && !components.includes(element));
}
var Features;
(function(Features2) {
  Features2[Features2["None"] = 0] = "None";
  Features2[Features2["RenderStrategy"] = 1] = "RenderStrategy";
  Features2[Features2["Static"] = 2] = "Static";
})(Features || (Features = {}));
var RenderStrategy;
(function(RenderStrategy2) {
  RenderStrategy2[RenderStrategy2["Unmount"] = 0] = "Unmount";
  RenderStrategy2[RenderStrategy2["Hidden"] = 1] = "Hidden";
})(RenderStrategy || (RenderStrategy = {}));
const Render = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let computedClass;
  let computedStyle;
  let show;
  let hidden;
  let propsWeControl;
  let $$restProps = compute_rest_props($$props, [
    "name",
    "as",
    "slotProps",
    "el",
    "use",
    "visible",
    "features",
    "unmount",
    "static",
    "class",
    "style"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { name } = $$props;
  let { as } = $$props;
  let { slotProps } = $$props;
  let { el = null } = $$props;
  let { use = [] } = $$props;
  let { visible = true } = $$props;
  let { features = Features.None } = $$props;
  let { unmount = true } = $$props;
  let { static: static_ = false } = $$props;
  let { class: classProp = void 0 } = $$props;
  let { style = void 0 } = $$props;
  if (!as) {
    throw new Error(`<${name}> did not provide an \`as\` value to <Render>`);
  }
  if (!isValidElement(as)) {
    throw new Error(`<${name}> has an invalid or unsupported \`as\` prop: ${as}`);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.slotProps === void 0 && $$bindings.slotProps && slotProps !== void 0)
    $$bindings.slotProps(slotProps);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  if ($$props.unmount === void 0 && $$bindings.unmount && unmount !== void 0)
    $$bindings.unmount(unmount);
  if ($$props.static === void 0 && $$bindings.static && static_ !== void 0)
    $$bindings.static(static_);
  if ($$props.class === void 0 && $$bindings.class && classProp !== void 0)
    $$bindings.class(classProp);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    computedClass = typeof classProp === "function" ? classProp(slotProps) : classProp;
    computedStyle = typeof style === "function" ? style(slotProps) : style;
    show = visible || features & Features.Static && static_ || !(features & Features.RenderStrategy && unmount);
    hidden = !visible && !(features & Features.Static && static_) && features & Features.RenderStrategy && !unmount;
    propsWeControl = {
      class: computedClass,
      style: `${computedStyle ?? ""}${hidden ? " display: none" : ""}` || void 0
    };
    {
      if (propsWeControl.style === void 0) {
        delete propsWeControl.style;
      }
    }
    $$rendered = `${show ? `
  ${as === "a" ? `
    <a${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `${as === "address" ? `<address${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</address>` : `${as === "article" ? `<article${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</article>` : `${as === "aside" ? `<aside${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</aside>` : `${as === "b" ? `<b${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</b>` : `${as === "bdi" ? `<bdi${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</bdi>` : `${as === "bdo" ? `<bdo${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</bdo>` : `${as === "blockquote" ? `<blockquote${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</blockquote>` : `${as === "button" ? `<button${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</button>` : `${as === "cite" ? `<cite${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</cite>` : `${as === "code" ? `<code${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</code>` : `${as === "data" ? `<data${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</data>` : `${as === "datalist" ? `<datalist${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</datalist>` : `${as === "dd" ? `<dd${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</dd>` : `${as === "dl" ? `<dl${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</dl>` : `${as === "dt" ? `<dt${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</dt>` : `${as === "div" ? `<div${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${as === "em" ? `<em${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</em>` : `${as === "footer" ? `<footer${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</footer>` : `${as === "form" ? `<form${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</form>` : `${as === "h1" ? `<h1${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</h1>` : `${as === "h2" ? `<h2${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</h2>` : `${as === "h3" ? `<h3${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</h3>` : `${as === "h4" ? `<h4${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</h4>` : `${as === "h5" ? `<h5${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</h5>` : `${as === "h6" ? `<h6${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</h6>` : `${as === "header" ? `<header${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</header>` : `${as === "i" ? `<i${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</i>` : `${as === "input" ? `<input${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>` : `${as === "label" ? `
    <label${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `${as === "li" ? `<li${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</li>` : `${as === "main" ? `<main${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</main>` : `${as === "nav" ? `<nav${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</nav>` : `${as === "ol" ? `<ol${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</ol>` : `${as === "p" ? `<p${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</p>` : `${as === "section" ? `<section${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</section>` : `${as === "span" ? `<span${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${as === "strong" ? `<strong${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</strong>` : `${as === "ul" ? `<ul${spread(
      [
        escape_object($$restProps),
        escape_object(propsWeControl),
        { hidden: hidden || void 0 || null }
      ],
      {}
    )}${add_attribute("this", el, 0)}>${slots.default ? slots.default({}) : ``}</ul>` : `${validate_component(as || missing_component, "svelte:component").$$render(
      $$result,
      Object.assign(
        {},
        {
          use: [
            ...use,
            forwardEvents
          ]
        },
        $$restProps,
        propsWeControl,
        { hidden: hidden || void 0 },
        { el }
      ),
      {
        el: ($$value) => {
          el = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
var DialogStates;
(function(DialogStates2) {
  DialogStates2[DialogStates2["Open"] = 0] = "Open";
  DialogStates2[DialogStates2["Closed"] = 1] = "Closed";
})(DialogStates || (DialogStates = {}));
var DisclosureStates;
(function(DisclosureStates2) {
  DisclosureStates2[DisclosureStates2["Open"] = 0] = "Open";
  DisclosureStates2[DisclosureStates2["Closed"] = 1] = "Closed";
})(DisclosureStates || (DisclosureStates = {}));
function resolveButtonType(props, ref) {
  if (props.type)
    return props.type;
  let tag = props.as ?? "button";
  if (typeof tag === "string" && tag.toLowerCase() === "button")
    return "button";
  if (ref && ref instanceof HTMLButtonElement)
    return "button";
  return void 0;
}
var Focus;
(function(Focus2) {
  Focus2[Focus2["First"] = 0] = "First";
  Focus2[Focus2["Previous"] = 1] = "Previous";
  Focus2[Focus2["Next"] = 2] = "Next";
  Focus2[Focus2["Last"] = 3] = "Last";
  Focus2[Focus2["Specific"] = 4] = "Specific";
  Focus2[Focus2["Nothing"] = 5] = "Nothing";
})(Focus || (Focus = {}));
var ListboxStates;
(function(ListboxStates2) {
  ListboxStates2[ListboxStates2["Open"] = 0] = "Open";
  ListboxStates2[ListboxStates2["Closed"] = 1] = "Closed";
})(ListboxStates || (ListboxStates = {}));
var MenuStates;
(function(MenuStates2) {
  MenuStates2[MenuStates2["Open"] = 0] = "Open";
  MenuStates2[MenuStates2["Closed"] = 1] = "Closed";
})(MenuStates || (MenuStates = {}));
var PopoverStates;
(function(PopoverStates2) {
  PopoverStates2[PopoverStates2["Open"] = 0] = "Open";
  PopoverStates2[PopoverStates2["Closed"] = 1] = "Closed";
})(PopoverStates || (PopoverStates = {}));
const { Object: Object_1$2 } = globals;
const TABS_CONTEXT_NAME = "headlessui-tabs-context";
function useTabsContext(component) {
  let context = getContext(TABS_CONTEXT_NAME);
  if (context === void 0) {
    throw new Error(`<${component} /> is missing a parent <TabGroup /> component.`);
  }
  return context;
}
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "defaultIndex", "vertical", "manual"]);
  let $listRef, $$unsubscribe_listRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  let { defaultIndex = 0 } = $$props;
  let { vertical = false } = $$props;
  let { manual = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component(), ["change"]);
  const dispatch = createEventDispatcher();
  let selectedIndex = null;
  let tabs = [];
  let panels = [];
  let listRef = writable(null);
  $$unsubscribe_listRef = subscribe(listRef, (value) => $listRef = value);
  let api = writable({
    selectedIndex,
    orientation: vertical ? "vertical" : "horizontal",
    activation: manual ? "manual" : "auto",
    tabs,
    panels,
    listRef,
    setSelectedIndex(index) {
      if (selectedIndex === index)
        return;
      selectedIndex = index;
      dispatch("change", index);
    },
    registerTab(tab) {
      if (tabs.includes(tab))
        return;
      if (!$listRef) {
        tabs = [...tabs, tab];
        return;
      }
      let currentSelectedTab = selectedIndex !== null ? tabs[selectedIndex] : null;
      let orderMap = Array.from($listRef.querySelectorAll('[id^="headlessui-tabs-tab-"]')).reduce((lookup, element, index) => Object.assign(lookup, { [element.id]: index }), {});
      let nextTabs = [...tabs, tab];
      nextTabs.sort((a, z) => orderMap[a.id] - orderMap[z.id]);
      tabs = nextTabs;
      selectedIndex = (() => {
        if (currentSelectedTab === null)
          return null;
        return tabs.indexOf(currentSelectedTab);
      })();
    },
    unregisterTab(tab) {
      tabs = tabs.filter((t) => t !== tab);
    },
    registerPanel(panel) {
      if (!panels.includes(panel))
        panels = [...panels, panel];
    },
    unregisterPanel(panel) {
      panels = panels.filter((p) => p !== panel);
    }
  });
  setContext(TABS_CONTEXT_NAME, api);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.defaultIndex === void 0 && $$bindings.defaultIndex && defaultIndex !== void 0)
    $$bindings.defaultIndex(defaultIndex);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if ($$props.manual === void 0 && $$bindings.manual && manual !== void 0)
    $$bindings.manual(manual);
  {
    api.update((obj) => {
      return {
        ...obj,
        selectedIndex,
        orientation: vertical ? "vertical" : "horizontal",
        activation: manual ? "manual" : "auto",
        tabs,
        panels
      };
    });
  }
  slotProps = { selectedIndex };
  $$unsubscribe_listRef();
  return `${validate_component(Render, "Render").$$render($$result, Object_1$2.assign({}, $$restProps, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabGroup" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const { Object: Object_1$1 } = globals;
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let myIndex;
  let selected;
  let myPanelRef;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use", "disabled"]);
  let $api, $$unsubscribe_api;
  let $myPanelRef, $$unsubscribe_myPanelRef = noop, $$subscribe_myPanelRef = () => ($$unsubscribe_myPanelRef(), $$unsubscribe_myPanelRef = subscribe(myPanelRef, ($$value) => $myPanelRef = $$value), myPanelRef);
  let { as = "button" } = $$props;
  let { use = [] } = $$props;
  let { disabled = false } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("Tab");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id2 = `headlessui-tabs-tab-${useId()}`;
  let tabRef = null;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    myIndex = tabRef ? $api.tabs.indexOf(tabRef) : -1;
    selected = myIndex === $api.selectedIndex;
    $$subscribe_myPanelRef(myPanelRef = $api.panels[myIndex]?.ref);
    propsWeControl = {
      id: id2,
      role: "tab",
      type: resolveButtonType({ type: $$props.type, as }, tabRef),
      "aria-controls": $myPanelRef ? $api.panels[myIndex]?.id : void 0,
      "aria-selected": selected,
      tabIndex: selected ? 0 : -1,
      disabled: disabled ? true : void 0
    };
    slotProps = { selected };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object_1$1.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "Tab" }, { el: tabRef }),
      {
        el: ($$value) => {
          tabRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_myPanelRef();
  return $$rendered;
});
const TabList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $listRef, $$unsubscribe_listRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("TabList");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let listRef = $api.listRef;
  $$unsubscribe_listRef = subscribe(listRef, (value) => $listRef = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    propsWeControl = {
      role: "tablist",
      "aria-orientation": $api.orientation
    };
    slotProps = { selectedIndex: $api.selectedIndex };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object.assign({}, { ...$$restProps, ...propsWeControl }, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabList" }, { el: $listRef }),
      {
        el: ($$value) => {
          $listRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_listRef();
  return $$rendered;
});
const TabPanels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let api = useTabsContext("TabPanels");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  slotProps = { selectedIndex: $api.selectedIndex };
  $$unsubscribe_api();
  return `${validate_component(Render, "Render").$$render($$result, Object.assign({}, $$restProps, { as }, { slotProps }, { use: [...use, forwardEvents] }, { name: "TabPanels" }), {}, {
    default: () => {
      return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
    }
  })}`;
});
const { Object: Object_1 } = globals;
const TabPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let panelData;
  let myIndex;
  let selected;
  let propsWeControl;
  let slotProps;
  let $$restProps = compute_rest_props($$props, ["as", "use"]);
  let $api, $$unsubscribe_api;
  let $elementRef, $$unsubscribe_elementRef;
  let { as = "div" } = $$props;
  let { use = [] } = $$props;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let elementRef = writable(null);
  $$unsubscribe_elementRef = subscribe(elementRef, (value) => $elementRef = value);
  let api = useTabsContext("TabPanel");
  $$unsubscribe_api = subscribe(api, (value) => $api = value);
  let id2 = `headlessui-tabs-panel-${useId()}`;
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    panelData = { id: id2, ref: elementRef };
    myIndex = $api.panels.indexOf(panelData);
    selected = myIndex === $api.selectedIndex;
    propsWeControl = {
      id: id2,
      role: "tabpanel",
      "aria-labelledby": $api.tabs[myIndex]?.id,
      tabIndex: selected ? 0 : -1
    };
    slotProps = { selected };
    $$rendered = `${validate_component(Render, "Render").$$render(
      $$result,
      Object_1.assign(
        {},
        { ...$$restProps, ...propsWeControl },
        { as },
        { use: [...use, forwardEvents] },
        { name: "TabPanel" },
        { slotProps },
        { visible: selected },
        {
          features: Features.RenderStrategy | Features.Static
        },
        { el: $elementRef }
      ),
      {
        el: ($$value) => {
          $elementRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({ ...slotProps }) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_api();
  $$unsubscribe_elementRef();
  return $$rendered;
});
var Reason;
(function(Reason2) {
  Reason2["Finished"] = "finished";
  Reason2["Cancelled"] = "cancelled";
})(Reason || (Reason = {}));
var TreeStates;
(function(TreeStates2) {
  TreeStates2["Visible"] = "visible";
  TreeStates2["Hidden"] = "hidden";
})(TreeStates || (TreeStates = {}));
const ServicesTabs_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tabs-wrapper.svelte-mnn9gi{margin-bottom:6rem}.tabs-wrapper.svelte-mnn9gi .group{display:grid;grid-template-columns:1fr;gap:1rem;border-radius:12px;background-color:var(--secondary)}.tabs-wrapper.svelte-mnn9gi .tabs{display:grid;grid-template-columns:repeat(5, 1fr);gap:0.5rem;border-radius:12px;padding:6px;max-height:450px}.tabs-wrapper.svelte-mnn9gi .tab{background-color:var(--primary);cursor:pointer;border:none;border-radius:12px;padding:10px 0;transition:0.1s ease;font-size:0.7rem;font-weight:600;color:var(--text-primary)}.tabs-wrapper.svelte-mnn9gi .panels{padding:0rem 1rem 2rem 1rem}.tabs-wrapper.svelte-mnn9gi .panel{color:var(--text-secondary);font-weight:400}.tabs-wrapper.svelte-mnn9gi .panel ul{color:var(--text-secondary);font-weight:400;padding-left:1rem}.tabs-wrapper.svelte-mnn9gi .panels h2{color:var(--text-primary);font-weight:600}.tabs-wrapper.svelte-mnn9gi .panels span{color:var(--text-primary);font-weight:600}.tabs-wrapper.svelte-mnn9gi .panels span{font-size:1.4rem}@media(min-width: 40rem){.tabs-wrapper.svelte-mnn9gi .tabs{grid-template-columns:1fr;gap:1rem}.tabs-wrapper.svelte-mnn9gi .group{grid-template-columns:0.5fr 2fr}.tabs-wrapper.svelte-mnn9gi .tab{padding:1rem 0;font-size:1rem}.tabs-wrapper.svelte-mnn9gi .panels{padding:2rem 2rem 2rem 1rem}.tabs-wrapper.svelte-mnn9gi .panels span{font-size:2rem}}.tabs-wrapper.svelte-mnn9gi .tab-selected{background-color:var(--secondary);color:var(--text-secondary);font-weight:normal}.tabs-wrapper.svelte-mnn9gi .tab-unselected{background-color:var(--primary)}",
  map: null
};
const ServicesTabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"tabs-wrapper svelte-mnn9gi"}">${validate_component(TabGroup, "TabGroup").$$render($$result, { vertical: true, class: "group" }, {}, {
    default: () => {
      return `<div class="${"tabs-btn-wrapper"}">${validate_component(TabList, "TabList").$$render($$result, { class: "tabs" }, {}, {
        default: () => {
          return `${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              class: ({ selected }) => selected ? "tab tab-selected" : "tab tab-unselected"
            },
            {},
            {
              default: () => {
                return `Recruitment`;
              }
            }
          )}
				${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              class: ({ selected }) => selected ? "tab tab-selected" : "tab tab-unselected"
            },
            {},
            {
              default: () => {
                return `Trainings`;
              }
            }
          )}
				${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              class: ({ selected }) => selected ? "tab tab-selected" : "tab tab-unselected"
            },
            {},
            {
              default: () => {
                return `Personal Brand`;
              }
            }
          )}
				${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              class: ({ selected }) => selected ? "tab tab-selected" : "tab tab-unselected"
            },
            {},
            {
              default: () => {
                return `HR Audit`;
              }
            }
          )}
				${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              class: ({ selected }) => selected ? "tab tab-selected" : "tab tab-unselected"
            },
            {},
            {
              default: () => {
                return `Business Consulting`;
              }
            }
          )}`;
        }
      })}</div>
		${validate_component(TabPanels, "TabPanels").$$render($$result, { class: "panels" }, {}, {
        default: () => {
          return `${validate_component(TabPanel, "TabPanel").$$render($$result, { class: "panel" }, {}, {
            default: () => {
              return `<span>“Right people on the right places” – old, but gold!</span><br> We provide professional
				recruitment services (using professional assessment tools of SHL); search for unique specialists
				and head hunting. Just show whom you want and we will bring them on board.`;
            }
          })}
			${validate_component(TabPanel, "TabPanel").$$render($$result, { class: "panel" }, {}, {
            default: () => {
              return `<span>Each time you focus on development – you win!</span><br>
				Make your learning activity choices with us. <br>
				<h2>Marketing</h2>
				<ul><li>Strategy</li>
					<li>Analytics</li>
					<li>Digital Marketing</li>
					<li>Communications</li></ul>
				<h2>Sales</h2>
				<ul><li>Retail</li>
					<li>Franchise</li>
					<li>Online sales</li>
					<li>Telesales</li>
					<li>Corporate Sales</li></ul>
				<h2>Human Resources</h2>
				<ul><li>HR as a Business Partner</li></ul>
				<h2>Project Management</h2>
				<ul><li>Scrum/Agile/Kanban</li>
					<li>Project Management</li></ul>
				<h2>Skills</h2>
				<ul><li>Conflict Management</li>
					<li>Excel</li>
					<li>Negotiation Skills</li>
					<li>Leadership</li>
					<li>Presentation Skills</li>
					<li>Coaching skills</li></ul>
				<h2>Happiness</h2>
				<ul><li>The clues of working with generations Y&amp;Z</li>
					<li>Decoding and Incorporating Happiness</li>
					<li>Happiness self-sabotage: How smartness &amp; success come in the way of happiness</li>
					<li>Happiness at work</li>
					<li>Developing a leadership style that helps increase team’s happiness and productivity
					</li></ul>
				<h2>Interview</h2>
				<ul><li>Competency Based Interview</li></ul>
				<h2>Standards</h2>
				<ul><li>ISO</li></ul>
				<h2>Writing</h2>
				<ul><li>Business Writing</li></ul>
				<h2>Remote work</h2>
				<ul><li>Remote work – how to manage teams and gain new skills</li></ul>`;
            }
          })}
			${validate_component(TabPanel, "TabPanel").$$render($$result, { class: "panel" }, {}, {
            default: () => {
              return `<span>Need help with your personal brand? We got you!</span><br>
				Internal Audit of all HR processes, ready solutions and support in implementation: Performance
				Management Organizational Development Grading system`;
            }
          })}
			${validate_component(TabPanel, "TabPanel").$$render($$result, { class: "panel" }, {}, {
            default: () => {
              return `<span>Be the face of your brand!</span><br> We will support you to create your personal
				brand. <br><br>
				<ul><li>CV creation</li>
					<li>Techniques of professional preparation for the interview</li>
					<li>Mock Interview</li>
					<li>Personality Tests</li>
					<li>Feedback</li>
					<li>Development Planning</li></ul>`;
            }
          })}
			${validate_component(TabPanel, "TabPanel").$$render($$result, { class: "panel" }, {}, {
            default: () => {
              return `<span>We got your back!</span><br> We’re here to ensure that your business needs are fully
				covered and each time supported by Professionals and ready to support you in: Finance and Accounting
				Advanced Analytics Strategy Business development Change management Project management Hotel management
				Information Technology`;
            }
          })}`;
        }
      })}`;
    }
  })}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".anchors.svelte-10i9xdd h1.svelte-10i9xdd{scroll-margin-top:6rem;font-size:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-2hlbwr_START -->${$$result.title = `<title>More Than Trust | mtt</title>`, ""}<!-- HEAD_svelte-2hlbwr_END -->`, ""}
<main>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	<section class="${"anchors svelte-10i9xdd"}"><h1 id="${"consultants"}" class="${"svelte-10i9xdd"}">Our Consultants</h1>
		${validate_component(ConsList, "ConsList").$$render($$result, {}, {}, {})}
		<h1 id="${"services"}" class="${"svelte-10i9xdd"}">Our Services</h1>
		${validate_component(ServicesTabs, "ServicesTabs").$$render($$result, {}, {}, {})}
		<h1 id="${"hrci"}" class="${"svelte-10i9xdd"}">HRCI Certification</h1>
		<h1 id="${"digitaltools"}" class="${"svelte-10i9xdd"}">Digital Tools</h1>
		<h1 id="${"vacancies"}" class="${"svelte-10i9xdd"}">Vacancies</h1>
		<h1 id="${"clients"}" class="${"svelte-10i9xdd"}">Our Clients</h1></section>
</main>`;
});
export {
  Page as default
};
