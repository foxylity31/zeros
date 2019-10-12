module.exports = function zeros(expression) {
  var tvins=0,fives=0,zeros=0,inc=2,start=1;
    var ex = expression.split('*');
    for (var step=0;step<ex.length;step++){
        var num = parseInt(ex[step]);
        if (ex[step].indexOf('!!') != -1){                
            inc=2;
            if (num % 2 == 1){                
                start=3; 
            } else {                
                start=2; 
            }
        } else {            
            inc=1; 
            start=2;
        }
        
        for (var i=start;i<=num;i+=inc){
            var n = i;
            while (n%10 == 0){
                zeros ++;
                n /= 10;
            }

            while (n%5 == 0){
                fives ++;
                n /= 5;
            }

            while (n%2 == 0){
                tvins ++;
                n /= 2;
            }                
        }
    }

    return zeros+Math.min(tvins,fives); 
}
