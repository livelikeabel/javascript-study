const prime1 =(end)=>{
    const prime = [], num = [];
    let curr = 2, i = curr;
    while(i <= end) num.push(i++);
    while(num.length){
        prime.push(curr = num.shift());
        i = num.length;
        while(i--) if(num[i] % curr == 0) num.splice(i, 1);
        if(curr*curr > num[num.length - 1]) break;
    }
    return prime.concat(num);
};
