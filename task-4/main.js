const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
       let num = result.input.split(" ")
    let max = parseInt(num[0])
    let min = parseInt(num[0])
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        let element = parseInt(num[i])
        if (element > max) {
            max = element
        } else if (element < min) {
            min = element
        }

        sum = max - min
    }

    console.log(sum);
  
});
