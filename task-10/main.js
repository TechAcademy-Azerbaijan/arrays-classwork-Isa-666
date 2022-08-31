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
        } 

      
    }
    let max2=parseInt(num[0])
    for (let j = 0; j < num.length; j++) {
        let element2 =parseInt(num[j]);
        if (element2>max2 && element2<max) {
           max2= element2
        }
    }
sum=max+max2;
    console.log(sum);
  
});
