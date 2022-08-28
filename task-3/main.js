const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
       const arr1 = [1, 2, 3];
    let b = arr1.map((i) => i + 2);
    let arr2 = [-4]
    let arr3 = b.concat(arr2);
    console.log(arr3);
  
});
