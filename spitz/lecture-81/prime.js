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

const prime2 =(end)=>{
    const prime = [2], num = [];
    let curr = 2, i = 3, j;
    while(i <= end){
        num.push(i);
        i += 2;
    }
    while(num.length){
        prime.push(curr = num.shift());
        i = num.length;
        j = curr * curr;
        while(i--){
            if(num[i] < j) break;
            if(num[i] % curr == 0) num.splice(i, 1);
        }
        if(curr*curr > num[num.length - 1]) break;
    }
    return prime.concat(num);
};

const prime3 =end=>{
    const num = [2];
    for(let i = 3; i <= end; i += 2) num.push(i);
    for(let k = 1; k < num.length; k++){
        let curr = num[k], min = curr * curr, i = num.length;
        if(num[i - 1] < min) break;
        while(i--){
            if(num[i] < min) break;
            if(num[i] % curr == 0) num.splice(i,1);
        }
    }
    return num;
};
