const BinderItem = class {
    el; viewmodel;
    constructor(el, viewmodel, _0=type(el, HTMLElement), _1=type(viewmodel, 'string')) {
        this.el = el;
        this.viewmodel = viewmodel;
        Object.freeze(this);
    }
};

const Binder = class {
    #items = new Set; // Identifier context를 지향. Array를 쓰면 value context를 쓰게 되는 것.
    add(v, _ = type(v, BinderItem)){this.#items.add(v);}
    render(viewmodel, _ = type(viewmodel, type(viewmodel, ViewModel))) {
        this.#items.forEach(item=>{
            const vm = type(viewmodel[item.viewmodel], ViewModel), el = item.el;
            Object.entries(vm.styles).forEach(([k, v])=>el.style[k] = v);
            Object.entries(vm.attributes).forEach(([k, v])=>el.setAttribute(k,y));
            Object.entries(vm.properties).forEach(([k, v])=>el[k] = v);
            Object.entries(vm.events).forEach(([k, v])=>el["on" + k]=e=>v.call(el,e,viewmodel));
        })
    }
};

new BinderItem(section, "wrapper");
new BinderItem(h2, "title");
new BinderItem(section2, "contents");
