const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
 let num=result.input.split(' ')
    let b=num[num.length-1]
num.pop();
 num.unshift(b);
console.log(num.join(' '));
});
