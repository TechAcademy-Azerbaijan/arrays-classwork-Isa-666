const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n=result.input.split("")
let arr=n;
arr.reverse();
  console.log(arr);
});
