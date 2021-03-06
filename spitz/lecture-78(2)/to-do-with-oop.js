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
    static load(json) {
        return new Task(json.title, json.isCompleted);
    }
    static get(title){return new Task(title);}
    toJSON(){
        return this.getInfo();
    }
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
const Folder = class extends Set{
  static load(json){
      const folder = new Folder(json.title);
      json.tasks.forEach(t=>{
          folder.addTask(Task.load(t));
      });
      return folder;
  }
  static get(title){return new Folder(title)}
  toJSON() {
      return {title: this.title, tasks: this.getTasks()};
  };
  constructor(title){
      super();
      this.title = title;
  }
  moveTask(task, folderSrc){
      if(super.has(task) || !folderSrc.has(task)) return err('.');
      folderSrc.removeTask(task);
      this.addTask(task);
  }
  addTask(task){
      if(!task instanceof Task) err('invalid task');
      super.add(task);
  }
  removeTask(task){
      if(!task instanceof Task) err('invalid task');
      super.delete(task);
  }
  getTasks(){
      return [...super.values()];
  }
  getTitle(){
      return this.title;
  }
  add(){} delete(){err('...')} clear(){} values(){}
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
const App = class extends Set{
    static load(json){
        const app = new App();
        json.forEach(f=>{
            app.addFolder(Folder.load(f));
        });
        return app;
    }
    toJSON(){
        return this.getFolders();
    }
    constructor() {
        super();
    }
    addFolder(folder){
        if(!folder instanceof Folder) err('invalid folder');
        super.add(folder);
    }
    removeFolder(folder){
        if(!folder instanceof Folder) err('invalid folder');
        super.delete(folder);
    }
    getFolders(){
        return [...super.values()];
    }
    add(){} delete(){err('...')} clear(){} values(){}
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
        this.taskEl=[];
        const [folder, task] = Array.from(parent.querySelectorAll('ul'));
        const [load, save] = Array.from(parent.querySelectorAll('button'));
        load.onclick = e=>{
            const v = localStorage['todo'];
            if(v) {
                this.app = App.load(JSON.parse(v));
                this.render();
            }
        };
        save.onclick = e=>{
            localStorage['todo'] = JSON.stringify(this.app);
        };
        this.folder = folder;
        this.task = task;
        this.currentFolder = null;
        parent.querySelector('nav>input').addEventListener("keyup",e =>{
            if(e.keyCode != 13) return;
            const v = e.target.value.trim();
            if(!v) return;
            const folder = Folder.get(v);
            this.app.addFolder(folder);
            e.target.value = '';
            this.render();
        });
        parent.querySelector('header>input').addEventListener("keyup",e =>{
            if(e.keyCode != 13 || !this.currentFolder) return;
            const v = e.target.value.trim();
            if(!v) return;
            const task = Task.get(v);
            this.currentFolder.addTask(task);
            e.target.value = '';
            this.render();
        });
    }
    _render() {
        const folders = this.app.getFolders();
        let moveTask, tasks;
        if(!this.currentFolder)this.currentFolder = folders[0];
        let oldEl = this.folder.firstElementChild, lastEl = null;
        folders.forEach(f => {
           let li;
           if(oldEl){
               li = oldEl;
               oldEl = oldEl.nextElementSibling;
           }else {
               li= this.taskEl.length ? this.taskEl.pop() : el('li');
               this.folder.appendChild(li);
               oldEl=null;
           };
           lastEl = li;
           li.setAttribute('draggable', true);
           li.innerHTML = f.getTitle();
           li.style.cssText = `font-weight:${this.currentFolder == f?'bold':'normal'}`;
           li.onclick = ()=>{
              this.currentFolder = f;
              this.render();
           };
           li.ondrop = e=>{
               e.preventDefault();
               f.moveTask(moveTask, this.currentFolder);
           };
           li.ondragover = e=>{
               e.preventDefault();
           };
        });
        if(lastEl) while(oldEl=lastEl.nextElementSibling){
            this.folder.removeChild(oldEl);
            this.taskEl.push(oldEl);
        }
        if(!this.currentFolder) return;
        tasks = this.currentFolder.getTasks();
        if(tasks.length == 0){
            while(oldEl=this.task.firstElementChild){
                this.task.removeChild(oldEl);
            }
        }else{
            oldEl = this.task.firstElementChild, lastEl = null;
            tasks.forEach(t =>{
                let li;
                if(oldEl){
                    li = oldEl;
                    oldEl = oldEl.nextElementSibling;
                }else {
                    li=el('li');
                    this.task.appendChild(li);
                    oldEl=null;
                }
                lastEl = li;
                const {title, isCompleted} = t.getInfo();
                li.setAttribute('draggable', true);
                li.innerHTML = `${isCompleted?'completed ':'process '}${title}`;
                li.addEventListener('click', e=>{
                    t.toggle();
                    this._render();
                });
                li.addEventListener('dragstart', e=>{
                    moveTask = t;
                });
            });
            if(lastEl) while(oldEl=lastEl.nextElementSibling){
                this.task.removeChild(oldEl);
                this.taskEl.push(oldEl);
            }
        }
    }
};

new DOMRenderer(document.querySelector('main'), new App());
