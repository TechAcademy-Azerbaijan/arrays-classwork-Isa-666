const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let a = result.input.split(" ")
    let max = 0;

    let arr = [];
    for (let i = 0; i <= a.length; i++) {
        arr.push(a[i]);
        if (parseInt(a[i]) > max) {
            max = parseInt(a[i]);
        }

    }
    let sum=0;
    for (let i = 1; i < arr.length; i++) {

        if (max === parseInt(a[i])) {
        
           sum=parseInt(sum+max);

        }
    } console.log(sum);
  
});
