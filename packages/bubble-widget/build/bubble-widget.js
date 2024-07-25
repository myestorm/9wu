import { defineComponent as n, ref as c, openBlock as a, createElementBlock as l, createTextVNode as r, toDisplayString as s, createElementVNode as u } from "vue";
const i = { class: "view" }, f = /* @__PURE__ */ n({
  __name: "BubbleView",
  props: {
    defaultValue: { default: 0 }
  },
  setup(t) {
    const e = c(t.defaultValue), o = () => {
      e.value++;
    };
    return (d, m) => (a(), l("div", i, [
      r(s(e.value) + " ", 1),
      u("button", { onClick: o }, "哇哈")
    ]));
  }
});
export {
  f as BubbleWidget
};
