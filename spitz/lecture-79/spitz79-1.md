# Spitz 79 - 1

프로그래밍 세계에서 유일하게 변하지 않는 원칙

**"모든 프로그램은 변한다."**

이미 작성된 복잡하고 거대한 프로그램을 어떻게 변경할 수 있을 것인가? 어떻게 수정에 강하게 할 수 있을까?

=> **격리(Isolation)**

결국 소프트웨어 공학의 상당 부분은 '격리 전략'이다.

격리전략의 기본은 "변화율에 따라 작성하기"이다. 변화되는 비율, 이유가 다르기 때문이다.

실전 수칙: **"강한 응집성 & 약한 의존성"**을 갖게 프로그램을 짜면 된다.(강한 응집성은 변화율이 비슷한 것들 끼리 모아둔 것, 약한 의존성은 서로 커플링이 덜 되어 있는 것)

근데 이 둘은 상대 관계에 있다. 너무 강한 응집성을 추구하면 강한 의존성이 생겨버리고, 너무 약한 의존성을 가지게 되면 응집성을 가질 수 없게 된다. 둘의 밸런스를 잡는게 실력이다. 밸런스를 잘 잡으면 격리가 실현되고 잘 못잡으면 실현되지 않는다.



### Spitz79 - 2

객체지향 개발을 하고 있냐 아니냐는 학문적으로 보면 2가지 조건을 만족해야한다.

1. **대체 가능성**
2. **내적 일관성(또는 내적 동질성)**



**대체 가능성**

폴리모피즘. 하위형은 상위형을 대신할 수 있다. 확장 된 형은, 확장되기 전 형을 대체할 수 있다.

```js
const Parent = class{};
const Child = class extends Parent{};
const a = new Child();
console.log(a instanceof Parent); // true
```

이 코드가 대체 가능성을 이야기 한다. 하위형이(확장형) 추상형을(확장되기 전) 대체할 수 있는 것이다. Child는 Parent를 대신할 수 있다는 것.

자바스크립트에서는 이걸 어떻게 만족하고 있을까?

프로토타입 체인에 의해서, `__proto__`에 기록되어있는 객체간의 체인으로 그 체인을 다 조사해서 그중에 하나라도 해당하면 instanceof가 성립하는 것으로 대체가능성을 만족하고 있다.

**내적 동질성**

```js
const Parent = class{
  wrap(){this.action();}
  action(){console.log('Parent');};
};
const Child = class extends Parent{
  action(){console.log('Child');};
}
const a = new Child();
a.wrap(); // Child
```

a.wrap()을 호출시, 'Child'가 로깅된다.  프로토타입체인의 과정을 생각해 보면, wrap은 Child의 프로토 체인에 없으니까 체인을 타고 올라가서 Parent의 wrap을 호출한다. 하지만 원래 context를 가리키는 객체 자체는 Child이기에 `this.action()` 를 호출하면 'Child'가 로깅되는 것이다.

내적 동질성은, 아무리 확장되긴 전의 객체들의 메소드나 다른 객체의 메소드, 계층상의 메소드를 호출해도 나의 본질은 변하지 않는다는 것이다. (나의 본질은 Child로 시작했기 때문에 나를 Parent로 본다해도 여전히 Child라는 것. 부모도 action()이 있고 나도 action이 있는데, 나는 원래 Child 였으니까 내것을 고를거야, 내것이 우선시 돼.)

**내적 동질성은 태생을 그대로 유지하려는 성격을 이야기 한다.**

대체 가능성과 내적 동질성이 객체지향의 학술적인 정의이고 이것을 언어가 어떤 방식으로든 지원해야한다.(프로토타입 체인이 되었든, 자바 스타일의 컨텍스트 바인딩이 되든.) 이 두가지가 지원되지 않으면, 우리가 알고있는 모든 객체지향 기법을 사용할 수 없다. 자바스크립트는 프로토타입을 통해 이 두가지를 성립하고 있는 것이다. 그렇기 때문에 우리는 자바스크립트를 통해 객체지향 프로그래밍을 할 수 있고 그것의 응용인 디자인 패턴을 사용할 수 있는 것이다.



#### Design pattern category

**GOF의 디자인패턴 분류**

생성패턴, 구조패턴, 행동패턴 => 이미 객체지향설계에 숙달한 사람을 대상으로 함.

**객체지향설계를 학습할 수 있는 분류**

다형성, 캡슐화, 객체 관계, 변화율, 역할모델



**알고리즘이 변화하는 이유?**

비지니스의 변화, 연관 라이브러리 변화, 호스트측 변화 => 대부분 통제불가요소



**기존 제어문 기반의 알고리즘이 갖는 문제**

"수정하면 전체가 컴파일 됨"

알고리즘이 변화한 부분만 수정하고 나머지는 건드리고 싶지 않다면?

=> 최대한 개별 알고리즘을 함수로 분리한다.



**알고리즘 분화 시 객체지향에서 선택할 수 있는 두 가지 방법**

1. 상속위임

   내부계약관계로 추상층에서 공통 요소를 해결하고 상태를 공유할 수 있음

2. 소유위임

   외부계약관계로 각각이 독립적인 문제를 해결하며 메세지를 주고 받는 것으로 문제를 해결함



**상속위임**

```js
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
```

공통부분은 부모에서 처리하고 자식별로 특이하게 처리해야하는 부분만 딱 꺼내서 처리할 수 있게 되는 것이다.

if를 제거하는 유일한 방법은 if 케이스 만큼 객체를 만든 다음에 그 객체를 선택하는 것을 런타임에 위임하는 것이다. 프로그래밍 세계에서 if를 제거하는 방법은 이것 밖에 없다!!



**소유위임**

```js
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
```

set parser를 통해 parser를 받아들이게 되어있다. 내가 소유하게 된 외부 객체인 `_paeser` 에게 위임을 하게 된 것이다.

소유위임을 사용하면, 내가 소유할 객체들을 원본 객체에게 전달할 책임이 생긴다. 주입, 인젝션 이라고 부른다.



**커맨드 패턴 응용**

```js
const Github = class{
  constructor(id, repo){
    this._base = `https://api.github.com/repos/${id}/${repo}/contents`;
  }
  load(path){
    if(!this._parser) return;
		const id = 'callback' + Github._id++;
    const f = Github[id] = ({data:{content}})=>{
      delete Github[id];
      document.head.removeChild(s);
      this._parser[0](content, ...this._parser[1]); // 커맨드 인보커
		};
    const s = document.createElement('script');
    s.src = `%{this._base + path}?callback=Github. ${id}`;
    document.head.appendChild(s);
  }
  setParser(f, ...arg){this._parser = [f, arg];} // 커맨드 객체화
}
Github._id = 0;
```



**실행시점 선택 위임**

```js
const Loader = class{
  constructor(id, repo){
    this._git = new Github(id, repo);
    this._router = new Map; // 라우팅 테이블
  }
  add(ext, f, ...arg){
    ext.split(',').forEach(v=>this._router.set(v, [f, ...arg]));
  }
  load(v){
    const ext = this._v.split('.').pop();
    if(!this._router.has(ext)) return;
    this._git.setParser(...this._router.get(ext)); // 확장자 경우에 따라 자동분기
    this._git.load(v);
  }
};

const loader = new Loader('hikaMaeng', 'codespitz79');
loader.add('jpg,png,gif', img, el('#a')); // 발생가능한 경우의 수를 값으로 기술
loader.add('md', md, el('#b'));

loader.load('xx.jpg');
loader.load('xx.md');
```



자바스크립트가 왜 프로토타입 체인이라는 시스템을 사용하는가?

넷스케이프2.0이 486DS66시절에 나왔기 때문. 그 때 메모리는 4MB가 최대였다. 4MB로 복잡한 객체지향을 돌리려니, 최대한 많은 메모리 영역을 공유하고 싶어서 체이닝 시스템을 사용한 것이다.



**실행시점으로 분기를 옮길 때의 장단점**

**장점**

1. 정의 시점에 모든 경우를 몰라도 됨
2. 정의 시점에 그 경우를 처리하는 방법도 몰라도 됨

일정한 통제 범위 내에서 확장가능한 알고리즘설계 가능

=> 재빨리 프로토타입이 등장하게 되고, 실제로 만질 수 있는 코드가 바로 나오게 되고, 코드의 기능만 점진적으로 안정적으로 추가된다. 본체가 안바뀌기 때문에. 개발 방법론상, 애자일과도 들어맞는다.

**단점**

1. 실행 시점에 모든 경우를 반드시 기술해야 함.
2. 실행 시점마다 알고리즘의 안정성을 담보해야 함.

매 호스트코드마다 안정성을 따로 담보해야 함.



