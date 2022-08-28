const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
       let a=result.input.split(" ");
let sum=0

  for (let i = 0; i < a.length; i++) {
    sum+=parseFloat(a[i]);
    
  }console.log(sum);
  
});
