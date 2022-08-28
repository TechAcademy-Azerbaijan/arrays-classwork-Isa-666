const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
 let arr=[1,2,3,4]
    

    arr.unshift(arr[3]);
    arr.pop(arr.length-1)
    
    console.log(arr.join(' '));
});
