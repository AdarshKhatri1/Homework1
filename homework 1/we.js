function runProgram(input){
    let data = input.trim().split("\n")
    let tcs = +data[0]
    let line = 1
    
    for(let i = 0; i< tcs; i++) {
        
        let n = +data[line]

        let matrix = []
        for(let i = 0; i< n; i++) {
            line++
            matrix.push(data[line].trim().split(""))
        }


        let row = 0
        let col  = 0
        let score = 0
      
        while(true ) {
           
          
            if(matrix[row]) {
                if(matrix[row][col] === 'R' && matrix[row][col + 1] === "L") {
                    score = 0
                    break;
                }

            }else {
                break;
            }
          
            if(matrix[row+1]) {
                if(matrix[row][col] === "D" && matrix[row +1][col] === "U" ){
                    score = 0
                    break;
                }
            }
            
    
            if( matrix[row][col] === 'R') {
                col++
         
            }
            else if(matrix[row][col] === "L") {
                col--
              
         
            }
            else if(matrix[row][col]=== "U") {
                row--
               
            }
            else if(matrix[row][col]==="D") {
                row++
            }
            
            score++
            
    
            if(row < 0 || col <0 || row === n || col === n)
                break;
        
            if(matrix[row][col]  === undefined) {
                break;
            }
    
        }
        
        console.log(score)
        line++
        
    }
    
}


 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}