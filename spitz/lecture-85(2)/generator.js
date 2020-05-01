const { timeout } = require('./timer');

const infinity = (function* () {
  let i = 0;
  while (true) yield i++;
})();
console.log(infinity.next());

const gene = function*(max, load, block){
  let i = 0, curr = load;
  while(i < max){
    if(curr--){
      block();
      i++;
    }else{
      curr = load;
      console.log(i);
      yield;
    }
  }
};

const ngFor = (max, load, block)=>{
  const iterator = gene(max, load, block);
  const f =_=>iterator.next().done||timeout(f);
  timeout(f, 0);
};

ngFor(100, 10, ()=>console.log('hi'));
