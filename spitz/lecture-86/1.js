const a = {
    a: 3,
    b: 5
};
const b = {
    a: 3,
    b: 5
};

console.log(a === b); // identifier

console.log(JSON.stringify(a) === JSON.stringify(b)); // value


const Worker = class {
    run() {
        console.log('working')
    }

    print() {
        this.run()
    }
};

const HardWorker = class extends Worker {
    run() {
        console.log('hardworking')
    }
};

const worker = new HardWorker();
console.log(worker instanceof Worker); // true. 자식은 부모를 대체할 수 있다. extends: 확장. hardworker의 부분집합이 worker이다.
worker.print(); // 'hardworking'


const EssentialObject = class {
    // hide state
    name = '';
    screen = null;

    constructor(name) {
        this.name = name;
    }

    camouflage() {
        this.screen = (Math.random() * 10).toString(16).replace(".", "");
    }

    get name() {
        // encapsulation. 외부에서는 screen을 쓰는지 name을 쓰는지 모른다.
        return this.screen || this.name
    }
};

const Manager = class {
    workers;

    constructor(...workers) {
        if (workers.every(w => w instanceof Worker)) this.workers = workers
        else throw 'invalid workers';
    }

    doWork() {
        this.workers.forEach(w => w.run())
    }
};

const manager = new Manager(new Worker('abel'), new HardWorker('heo'));
console.log(manager.doWork());


const Renderer = class {
    #view = null; #base = null;
    constructor(baseElement) {
        this.#base = baseElement;
    }
    set view(v){
        if(v instanceof View) this.#view = v;
        else throw 'invalid view';
    }
    render(data){
        const base = this.#base, view = this.#view;
        if(!base||!view) throw 'no base or view';
        let target = base.firstElementChild;
        do base.removeChild(target); while (target = target.nextElementSibling);
        base.appendChild(view.getElement(data))
        view.initAni();
        view.startAni();
    }
}
