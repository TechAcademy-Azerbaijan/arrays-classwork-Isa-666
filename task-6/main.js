const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
      let num = result.input.split(' ')

    if (num.length <= 2) {
        console.log("Ooops!");
        return;
    }  
        let max = parseInt(num[0]);
        let min = parseInt(num[0]);

        for (let i = 0; i < num.length; i++) {
            let element = num[i]
            if (element > max) {
                max = element;
            } else if (element < min) {
                min = element
            }






        }
        console.log(`${min}\n${max}`);
  
});
