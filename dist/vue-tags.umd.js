/*!
 * vue-tags v0.1.1 
 * (c) 2020 
 * Released under the undefined License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/free-solid-svg-icons'), require('@fortawesome/vue-fontawesome')) :
  typeof define === 'function' && define.amd ? define(['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons', '@fortawesome/vue-fontawesome'], factory) :
  (global = global || self, global.VueTags = factory(global.fontawesomeSvgCore, global.freeSolidSvgIcons, global.vueFontawesome));
}(this, (function (fontawesomeSvgCore, freeSolidSvgIcons, vueFontawesome) { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: "VueTags",
    props: {
      options: {
        type: Array,
        default: Array
      },
      closable: {
        type: Boolean
      }
    },
    data: function data() {
      return {
        optionsList: []
      };
    },
    watch: {
      options: function options() {
        this.updateList();
      }
    },
    methods: {
      removeOption: function removeOption(toRemoveElem) {
        var optionsToParent = [];
        this.optionsList.filter(function (v) {
          if (v.id != toRemoveElem.id) {
            optionsToParent.push(v.name);
          }
        });
        this.$emit("delete-tag", optionsToParent);
      },
      updateList: function updateList() {
        var _this = this;

        this.optionsList = [];
        this.options.filter(function (v) {
          if (v) {
            _this.optionsList.push({
              name: v,
              id: Date.parse(new Date()) * Math.random(1, 10)
            });
          }
        });
      }
    },
    mounted: function mounted() {
      this.updateList();
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }

  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"tag"}},_vm._l((_vm.optionsList),function(option){return _c('span',{key:option.id,staticClass:"ic-tag"},[_vm._t("icon"),_vm._v("\n    "+_vm._s(option.name)+"\n    "),(_vm.closable)?_c('font-awesome-icon',{staticClass:"ic-delete-icon",attrs:{"icon":"times"},on:{"click":function($event){return _vm.removeOption(option)}}}):_vm._e()],2)}),0)};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-74821287_0", { source: ".ic-tag[data-v-74821287]{background-color:#e6e7e8;border-radius:3px;margin-right:8px;padding:5px;color:#323232;display:inline-block}.ic-tags-container[data-v-74821287]{display:inline-block}.ic-delete-icon[data-v-74821287]{padding-left:5px;color:#37b77c}#tag[data-v-74821287]{font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:.5px}", map: undefined, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-74821287";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var VueTags = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  var version = "0.1.1";
  fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas);

  var install = function install(Vue) {
    /*
     * NOTE:
     *   if you need to extend Vue contstructor, you can extend it in here.
     */
    Vue.prototype.$add = function (a, b) {
      return a + b;
    };
    /*
     * NOTE:
     *  somthing implementation here ...
     */


    Vue.component("font-awesome-icon", vueFontawesome.FontAwesomeIcon);
    Vue.component(VueTags.name, VueTags);
  };

  var plugin = {
    install: install,
    version: version
  };

  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(plugin);
  }

  return plugin;

})));
