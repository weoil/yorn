import Vue from "vue";
class ObServer {
  constructor() {
    this.els = {};

    if (IntersectionObserver) {
      this.ob = new IntersectionObserver(els => {
        els.forEach(el => {
          if (el.isIntersecting) {
            this.call(el.target);
          }
        });
      });
    } else {
      this.check();
      window.addEventListener("scroll", this.check);
    }
  }
  check() {
    let wh = window.innerHeight,
      wtop = window.scrollY;
    for (let key in this.els) {
      let { el, top, height } = this.els[key];
      if (!top) {
        top = el.offsetTop;
        height = el.clientHeight;
        this.els[key]["top"] = top;
        this.els[key]["height"] = height;
        this.els[key]["flag"] = false;
      }
      if (wtop + wh > top && top + height > wtop) {
        if (this.els[key]["flag"]) continue;
        this.call(el);
        this.els[key]["flag"] = true;
      } else {
        this.els[key]["flag"] = false;
      }
    }
  }
  call(el) {
    let name = this.findKey(el);
    if (!name) return;
    let { cb, mod } = this.els[name];
    cb && cb();
    if (mod["once"]) {
      this.unobserve(name, el);
    }
  }
  findKey(el) {
    for (let key in this.els) {
      if (this.els[key]["el"] === el) {
        return key;
      }
    }
  }
  observer(key, el, mod, cb) {
    this.els[key] = { el, cb, mod };
    if (this.ob) {
      this.ob.observe(el);
    }
  }
  update(key, el) {
    this.els[key]["el"] = el;
  }
  unobserve(key, el) {
    delete this.els[key];
    if (this.ob) {
      this.ob.unobserve(el);
    }
  }
}
const obServer = new ObServer();
Vue.directive("screen", {
  bind: function(el, { value, arg, modifiers }, vNode) {
    let name = arg ? arg : vNode["key"];
    if (!name) {
      return;
    }
    obServer.observer(name, el, modifiers, value);
  },
  unbind: function(el, { arg }, vNode) {
    let name = arg ? arg : vNode["key"];
    obServer.unobserve(name, el);
  }
});
