const gene4 = a=>{
  let b;
  return new SeqIterable(
    cont=>{
      cont.resume(a);
    },
    cont=>{
      b=a;
      cont.resume(b);
    }
  );
};
