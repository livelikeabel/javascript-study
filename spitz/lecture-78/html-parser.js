const parser = input=>{
  input = input.trim();
  const result = {name:'ROOT', type:'node', children:[]};
  const stack = [{tag:result}];
  let curr, i = 0, j = input.length;
  while(curr = stack.pop()){
    while(i < j){
    }
  };
  return result;
};
