const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    var arr = [5, 9, 3, 4, 6];
    
    var m = Math.max(...arr);
    
    console.log(m)

  
});
