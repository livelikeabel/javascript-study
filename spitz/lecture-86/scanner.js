const Scanner = class{
    scan(el, _ = type(el, HTMLElement)){
        const binder = new Binder;

        const stack  = [el.firstElementChild];
        let target;
        while(target = stack.pop()){
            this.checkItem(binder, target);
            if(target.firstElementChild) stack.push(target.firstElementChild);
            if(target.nextElementSibling) stack.push(target.nextElementChild);
        }
        return binder;
    }
    checkItem(binder, el) {
        const vm = el.getAttribute('data-viewmodel');
        if(vm) binder.add(new BinderItem(el, vm));
    }
};
