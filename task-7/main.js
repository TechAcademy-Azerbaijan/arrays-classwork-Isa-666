const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
 
    let arr1=[14,17,16,3,7,19,9,];
let arr2=[];
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i]%2!==0) {
            arr2.push(arr1[i]);
            
        }
        
    }console.log(arr2.join(' '));
  
});
