const Github = class{ // 정의시점 - 변하지 않는 부분
    constructor(id, repo){
        this._base = `https://api.github.com/repos/${id}/${repo}/contents`;
    }
    load(path){
        const id = 'callback' + Github._id++;
        const f = Github[id] = ({data:{content}})=>{
            delete Github[id];
            document.head.removeChild(s);
            this._loaded(content); // 위임부분
        };
        const s = document.createElement('script');
        s.src = `${this._base + path}?callback=Github.${id}`;
        document.head.appendChild(s);
    }
    _loaded(v){throw 'override!';}
};
Github._id = 0;
const ImageLoader = class extends Github{ // 실행시점 - 변하는 부분
    constructor(id, repo, target){
        super(id, repo);
        this._target = target;
    }
    _loaded(v){ // 위임구현
        this._target.src = 'data:text/plain;base64,' + v;
    }
}
const s75img = new ImageLoader(
    'hikaMaeng',
    'codespitz79',
    document.querySelector('#a')
);
s75img.load('einBig.png');
const MdLoader = class extends Github{
    constructor(id, repo, target){
        super(id, repo);
        this._target = target;
    }
    _loaded(v){
        this._target.innerHTML = this._parseMD(v);
    }
    _parseMD(v){
        return d64(v).split('\n').map(v=>{
            let i = 3;
            while(i--){
                if(v.startsWith('#'.repeat(i + 1))) return `<h${i + 1}>${v.substr(i + 1)}</h${i + 1}>`;
            }
            return v;
        }).join('<br>');
    }
};
const d64 =v=>decodeURIComponent(
    atob(v).split('').map(c=>'%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join('')
);
const s75md = new MdLoader('hikaMaeng', 'codespitz79', document.querySelector('#b'))
s75md.load('README.md');
