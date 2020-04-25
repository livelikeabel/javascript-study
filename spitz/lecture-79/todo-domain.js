const Sort = class{
    static title(a, b){return a.sortTitle(b)};
    static date(a, b){return a.sortDate(b)};
    sortTitle(task){throw 'override';}
    sortDate(task){throw 'override';}
};

const Task = class extends Sort{
    static get(title, date = null){return new Task(title, date);}

    constructor(title, date = null){
        super();
        if(!title) throw 'invalid title';
        this._title = title;
        this._date = date;
        this._isComplete = false;
    }
    isComplete() {return this.isComplete;}
    toggle(){this._isComplete = !this._isComplete;}
    sortTitle(task){return this._title > task._title;}
    sortDate(task){return this._date > task._date;}
};

const TaskList = class{
    constructor(title){
        if(!title) throw 'invalid title';
        this._title = title;
        this._list = [];
    }
    add(title, date){this._list.push(Task.get(title, date));}
    remove(task){
        const list = this._list;
        if(list.includes(task)) list.splice(list.indexOf(task), 1);
    }
    byTitle(stateGroup = true){return this._getList(Sort.title, stateGroup);}
    byDate(stateGroup = true){return this._getList(Sort.date, stateGroup);}
    _getList(sort, stateGroup){
        const list = this._list;
        return !stateGroup ? [...list].sort(sort) : [
            ...list.filter(v=>!v.isComplete()).sort(sort),
            ...list.filter(v=>v.isComplete()).sort()
        ]
    }
};

const list1 = new TaskList('비사이드');
list1.add('지라설치');
list1.add('지라클라우드 접속');

const list2 = new TaskList('s3-4');
list2.add('2강 답안 작성');
list2.add('3강 교안 작성');

const list = list2.byDate();
list[1].task.add('코드정리');
list[1].task.add('다이어그램정리');
