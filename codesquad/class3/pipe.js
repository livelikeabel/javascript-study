const trim = function(){};
const normarlize = function(){};

pipe(
  trim,
  normarlize,
  console.log
)('string ~')

const pipe = (...functions) => args => functions.reduce((arg, nextFn) => nextFn(arg) ,args)