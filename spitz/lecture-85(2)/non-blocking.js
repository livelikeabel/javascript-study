const working =_=>{};
for(let i = 0; i < 10000; i++) working();

const nbFor = (max, load, block)=>{
  let i = 0;
  const f = time=>{
    let curr = load;
    while(curr-- && i < max){
      block();
      i++;
    }
    console.log(i);
    if(i < max - 1) requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
};

nbFor(10000, 5, () => console.log('hi'));
