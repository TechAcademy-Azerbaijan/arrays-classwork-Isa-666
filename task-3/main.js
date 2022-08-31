const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
     let num = result.input.split(" "); //1 2 3 -4

    for (let i = 0; i < num.length; i++) {
        
        if (num[i] > 0) {
            num[i]=parseInt(num[i]) + 2
        } else if (num[i] < 0) {
num[i] = parseInt(num[i])
        }

    } 
    console.log(num.join(" "));
  
});
