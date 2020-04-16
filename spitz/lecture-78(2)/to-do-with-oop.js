/**
 *  데이터 분석(엔티티 분석)
 *  원자성: 더이상 쪼개지지 않는 애들. 데이터 관점에서 제일 작은 단위.
 *  to-do app에서는 task, 그리고 task들을 담는 folder, 그리고 folder를 담는 app이 있다.
 *  객체에서는 객체의 실체가 값이 아니다.
 * */


const err = v=>{
  throw v;
};
const Task = class{
    constructor(title, isCompleted = false){
        this.title = title;
        this.isCompleted = isCompleted;
    }
    setTitle(title){
        this.title = title;
        // return new Task(title, this.isCompleted); --> immutable
    }
    toggle(){
        this.isCompleted = !this.isCompleted;
        // return new Task(this.title, !this.isCompleted); --> immutable
    }
    getInfo(){
        return {title:this.title, isCompleted:this.isCompleted};
    }

    // isEqual(task){
    //     return task.title == this.title && task.isCompleted;
    // }
};
()=>{
    let isOkay = true;
    const task = new Task('test1');
    isOkay = task.getInfo().title == 'test1' && task.getInfo().isCompleted == false;
    console.log('1', isOkay);
    task.toggle();
    isOkay = task.getInfo().title == 'test1' && task.getInfo().isCompleted == true;
    console.log('2', isOkay);
};
// 배열을 만들면 중복되어 있는 레퍼런스 데이터가 들어올 수 있다.
const Folder = class{
  constructor(title){
      this.title = title;
      this.tasks = new Set();
  }
  addTask(task){
      if(!task instanceof Task) err('invalid task');
      this.tasks.add(task);
  }
  removeTask(task){
      if(!task instanceof Task) err('invalid task');
      this.tasks.delete(task);
  }
  getTasks(){
      return [...this.tasks.values()];
  }
  getTitle(){
      return this.title;
  }
};
(()=>{
    let isOkay = true;
    const task = new Task('task1');
    const folder = new Folder('folder1');
    isOkay = folder.getTasks().length == 0
    console.log('1', isOkay);
    folder.addTask(task);
    isOkay = folder.getTasks().length == 1 && folder.getTasks()[0].title == 'task1';
    console.log('2', isOkay);
    folder.addTask(task);
    isOkay = folder.getTasks().length == 1 && folder.getTasks()[0].title == 'task1';
    console.log('3', isOkay);
});
const App = class{
    constructor() {
        this.folders = new Set();
    }
    addFolder(folder){
        if(!folder instanceof Folder) err('invalid folder');
        this.folders.add(folder);
    }
    removeFolder(folder){
        if(!folder instanceof Folder) err('invalid folder');
        this.folders.delete(folder);
    }
    getFolders(){
        return [...this.folders.values()];
    }
};

const Renderer = class{
    constructor(app){
        this.app = app;
    }
    render(){
        this._render();
    }
    _render(){
        err('must be overrided');
    }
};
const el = tag=>document.createElement(tag);
const DOMRenderer = class extends Renderer{
    constructor(parent, app){
        super(app);
        const [folder, task] = Array.from(parent.querySelectorAll('ul'));
        this.folder = folder;
        this.task = task;
        this.currentFolder = null;
        parent.querySelector('nav>input').addEventListener("keyup",e =>{
            if(e.keyCode != 13) return;
            const v = e.target.value.trim();
            if(!v) return;
            const folder = new Folder(v);
            this.app.addFolder(folder);
            e.target.value = '';
            this.render();
        });
        parent.querySelector('header>input').addEventListener("keyup",e =>{
            if(e.keyCode != 13 || !this.currentFolder) return;
            const v = e.target.value.trim();
            if(!v) return;
            const task = new Task(v);
            this.currentFolder.addTask(task);
            e.target.value = '';
            this.render();
        });
    }
    _render() {
        const folders = this.app.getFolders();
        if(!this.currentFolder)this.currentFolder = folders[0];
        this.folder.innerHTML = '';
        folders.forEach(f => {
           const li = el('li');
           li.innerHTML = f.getTitle();
           li.style.cssText = `font-weight:${this.currentFolder == f?'bold':'normal'}`;
           li.addEventListener('click', ()=>{
              this.currentFolder = f;
              this.render();
           });
           this.folder.appendChild(li);
        });
        if(!this.currentFolder) return;
        this.task.innerHTML = '';
        this.currentFolder.getTasks().forEach(t =>{
           const li = el('li');
           const {title, isCompleted} = t.getInfo();
           li.innerHTML = `${isCompleted?'completed ':'process '}${title}`;
           li.addEventListener('click',()=>{
              t.toggle();
              this._render();
           });
           this.task.appendChild(li);
        });
    }
};

new DOMRenderer(document.querySelector('main'), new App());
