const textNode = (input, cursor, curr)=>{
    const idx = input.indexOf('<', cursor);
    curr.tag.children.push({
        type:'text', text:input.substring(cursor, idx)
    });
    return idx;
}

const parser = input=>{
    input = input.trim();
    const result = {name:'ROOT', type:'node', children:[]};
    const stack = [{tag:result}];
    let curr, i = 0, j = input.length;
    while(curr = stack.pop()){
        while(i < j){
            const cursor = i;
            if(input[cursor] === '<'){
                // A, B의 경우
            }else{
                // C의 경우
                i = textNode(input, cursor, curr);
            }
        }
    };
    return result;
};
