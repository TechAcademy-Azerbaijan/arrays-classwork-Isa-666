const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let num = result.input.split(' ');

    let max = Math.max(...num)
    console.log(max);

  
});
