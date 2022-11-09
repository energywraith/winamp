// Typescript-checking is not yet supported for directives.

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    beforeMount: function (el, binding) {
      binding.event = function (event) {
        if (!(el === event.target || el.contains(event.target))) {
          if (binding.value instanceof Function) {
            binding.value(event);
          }
        }
      };
      document.body.addEventListener("click", binding.event);
    },
    unmounted: function (_el, binding) {
      document.body.removeEventListener("click", binding.event);
    },
  })
})