
let nodePath = process.argv[0];
let appPath = process.argv[1];
let numb1 = process.argv[2];
let numb2 = process.argv[3];

(function() {
    let ManipulateN = function(){

        let checkPowN = function(){
            let pow = numb1*numb1,
            arr =[],
            isin = false;
            while(pow!==0){
                arr.push(pow%10);
                pow = Math.floor(pow/10);
            }
            for (let i=0; i<=arr.length; i++){
                if (arr[i] === 3){
                    isin = true;
                }
            }
            if (isin === true){
                console.log(true);
            }else{
                console.log(false);
            }
        };

        let reverseN = function(){
            let numb = numb2,
            revarr = [];
            while(numb!==0){
                revarr.push(numb%10);
                numb = Math.floor(numb/10);
            }
            let revn = revarr.join("");
            
            console.log(revn);
        };

        return{
            task1: checkPowN,
            task2: reverseN
        };
    };

    let dotasks = ManipulateN();

    dotasks.task1();
    dotasks.task2();

}());

(function(){
    let maxSumOfDividers = function(){
        let maxSum = 0, num;
        for (let i=1; i<=10000; i++){
           let currentSum = 0;
            for(let j=1; j<=i; j++){
                if(i % j === 0){
                    currentSum += j; 
                }
            }
            if (maxSum <= currentSum){
                maxSum = currentSum;
                num = i;
            }
        }
        console.log(`n= ${  num  }, maxSum = ${  maxSum }`);
    };
    
    return maxSumOfDividers();
    
    }());