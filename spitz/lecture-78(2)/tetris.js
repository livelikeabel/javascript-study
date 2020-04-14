// STAGE: 현재 스테이지 정보
// SCORE: 점수 및 계산법
// BLOCK: 범용 블록정의
// GAME: 게임본체
// PANEL: 범용패널
// START: 시작화면
// STAGE END: 스테이지 종료
// DEAD: 죽음
// CLEAR: 클리어
// REPORT: 결과화면
// RENDERER: 범용 렌더링 처리기
//   TABLE RENDERER
//   CANVAS RENDERER
// DATA: 게임 <=> 렌더링 간 프로토

// 권한과 책임을 일치하게 나눌 수 있는가.
// 양방향 의존성은 객체지향을 무너뜨린다.

// utils
const prop =(target, v)=>Object.assign(target, v);

const Stage = class{
    constructor(last, min, max, listener){
        prop(this, {last, min, max, listener});
    }
    clear(){
        this.curr = 0;
        this.next();
    }
    next(){
        if(this.curr++ < Stage.last){
            const rate = (this.curr - 1) / (this.last - 1);
            this.speed = this.min + (this.max - this.min) * (1 - rate);
            this.listener();
        }
    }
    score(line){
        return parseInt((this.curr * 5) * (2 ** line));
    }
};

const Score = class{
  constructor(stage, listener){
      prop(this, {stage, listener});
  }
  clear(){this.curr = this.total = 0;}
  add(line){
      const score = this.stage.score(line);
      this.curr += score;
      this.total += score;
      this.listener();
  }
};

const Block = class{
    constructor(color, ...blocks){
        prop(this, {color, rotate:0, blocks,
            count:blocks.length - 1});
    }
    left(){
        if(--this.rotate < 0) this.rotate = count;
    }
    right(){
        if(++this.rotate > this.count) this.rotate = 0;
    }
    getBlock(){return this.blocks[this.rotate]}
};
const blocks = [
    class extends Block{
        constructor(){
            super('#f8cbad',
                [[1],[1],[1],[1]],
                [[1, 1, 1, 1]]
            );
        }
    }
];
