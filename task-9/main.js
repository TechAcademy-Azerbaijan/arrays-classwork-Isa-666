const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let a = result.input.split(" ")
    let max = parseInt(a[0]);
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        let element1 = parseInt(a[i])
        if (element1 > max) {
            max = element1;

        }

    }
    for (let j = 0; j < a.length; j++) {
        let element2 = parseInt(a[j]);
        if (element2 !== max) {
            sum += element2
        }
    }


    console.log(sum);
  
});
