const render = function (...urls) {
    Promise.all(urls.map(url => fetch(url, { method: "GET" }).then(res => res.json()))).then(arr => {
        arr.forEach(console.log);
    });
};
render("1.json", "2.json", "3.json");


const render2 = function (...urls) {
    const loop = _ => {
        if (urls.length) {
            fetch(urls.shift(), { method: "GET" }).then(res => res.json()).then(json => {
                console.log(json);
                loop();
            });
        }
    };
    loop();
};
render2("1.json", "2.json", "3.json");

const dataLoader = function* (f, ...urls) {
    for (const url of urls) {
        const json = yield fetch(url, { method: "GET" }).then(res => res.json());
        yield json;
    }
};
const render3 = function (...urls) {
    const iter = dataLoader(...urls);
    const next = ({ value, done }) => {
        if (!done) {
            if (value instanceof Promise) value.then(v => next(iter.next(v)));
            else {
                console.log(value);
                next(iter.next());
            }
        }
    };
    next(iter.next())
};
render3("1.json", "2.json", "3.json");


const render5 = async function(...urls) {
    for(const url of urls){
        console.log(await (await fetch(url, {method: "GET"})).json());
    }
};
render5("1.json", "2.json", "3.json");

const dataLoader6 = async function*(...urls){
    for(const url of urls){
        yield await(await fetch(url, {method:"GET"})).json();
    }
};
const render6 = async function(...urls){
    for await(const json of dataLoader6(...urls)) {
        console.log(json)
    }
};
render6("1.json", "2.json", "3.json");

const urlLoader = async function*(url) {
    yield await(await fetch(url, {mehtod: "GET"})).json();
};
const dataLoader7 = async function*(...urls){
    for(const url of urls) yield* urlLoader(url);
};
const render7 = aysnc function(...urls) {
    for await(const json of dataLoader7(...urls)){
        console.log(json)
    }
}
render7()








const url = aysnc function*(url) {
    yield await(await fetch(url, {mehtod: "GET"})).json();
}

const urls = async function*(...urls){
    const r = [];
    for(const u of urls.map(url)) r.push((await u.next()).value);
    yield r;
}

const dataLoader8 = async function*(...aIters){
    for(const iter of aIters) yield* iter;
}

const render8 = async function(...aIters) {
    for await(const json of dataLoader8(...aIters)) console.log(json)
}

render8(urls("1.json", "2.json"), url("3.json"));

const start = function*(url){yield "load start";};
const end = function*(url){yield "load end"};
const url = async function*(url) {
    yield await(await fetch(url, {method: "GET"})).json();
};

render9(start(), urls("1.json", "2.json"), url("3.jon"), end());


const url = (url, opt = {mehtod: "POST"}) => new Url(url, opt);
const Url = class {
    #url; #opt;
    constructor(url, opt) {
        this.#url = url;
        this.#opt = opt;
    }
    async *load() {
        yield await(await fetch(this.#url, this.#opt)).json();
    }
};



const urls = async function*(...urls){
    for(const url of urls) r.push(
        (await url.load().next()).value
    );
    yield r;
};
const dataLaoder = async function*(...aIters) {
    for(const iter of aIters) yield
}

render(
    start(),
    urls(url("1.json"), url("2.json")),
    end()
);




const AIter = class {
    update(v) {}
    async *load(){throw "override";}
};

const Url = class extends AIter{
    #url; #opt;
    constructor(u, opt){
        super();
        this.#url = u;
        this.#opt = opt;
    }
    update(json) {
        if(json) this.#opt.body = JSON.stringify(json);
    }
    async *load(){
        console.log('body', this.#opt.body);
        yield await(await fetch(this.#wait))
    }
}

const url = (u, opt = {lmehtod})





