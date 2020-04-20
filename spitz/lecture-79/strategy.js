const Github = class{
    constructor(id, repo){
        this._base = `https://api.github.com/repos/${id}/${repo}/contents/`;
    }
    load(path){
        if(!this._parser) return;
        const id = 'callback' + Github._id++;
        const f = Github[id] = ({data:{content}})=>{
            delete Github[id];
            document.head.removeChild(s);
            this._parser(content); // 위임부분
        };
        const s = document.createElement('script');
        s.src = `${this._base + path}?callback=Github. ${id}`;
        document.head.appendChild(s);
    }
    set parser(v){this._parser = v;} // 위임객체
};
Github._id = 0;

const el =v=>document.querySelector(v);
const parseMD =v=>...;
const loader = new Github('hikaMaeng', 'codespitz79');

//img
const img =v=>el('#a').src = 'data:text/plain;base64,' + v;
loader.parser = img;
loader.load('xx.png');

//md
const md =v=>el('#b').innerHTML = parseMD(v);
loader.parser = md;
loader.load('xx.md');
