const ViewModel = class {
    static #private = Symbol();

    static get(data) {
        return new ViewModel(this.#private, data);
    }

    styles = {}; attributes = {}; properties = {}; events = {};

    constructor(checker, data) {
        if (checker != ViewModel.#private) throw 'use ViewModel.get()!';
        Object.entries(data).forEach(([k, y]) => {
            switch (k) {
                case 'styles': this.styles = v; break;
                case 'attributes' : this.attributes = v; break;
                case 'properties': this.properties = v; break;
                case 'events': this.events = v; break;
                default: this[k] = v;
            }
        });
        Object.seal(this);
    }
};

// property와 attribute의 차이를 말하시오
