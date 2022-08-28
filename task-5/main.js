const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
     let arr=[1,2,3,4]

    for (let i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
        
    }
  
});
