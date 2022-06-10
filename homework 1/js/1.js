
function runProgram(input) {
    
  var x = input.trim().split('\n')
  var tc =+ x[0]
  var line = 1
   
  for(var i = 0; i<tc; i++)
  {
      var size =+ x[line] 
  line++
  var arr1 = x[line].trim().split(' ').map(Number)
  line++
    var arr2 = x[line].trim().split(' ').map(Number)
 line++
  console.log(res(arr1,arr2,size))
   
  }
} 
 function res(arr1,arr2,size){ 

    var count = 0;
    var l = 0
    var r = size-1
    
    while(l<size && r>=0)
    {
        if(arr1[l]==arr2[r])
        {
            count++
            l++
            r--
        }
        else if(arr1[l]<arr2[r])
        {
            l++
        }
        else
        {
            r--
        }
        
     
    }
    return count
     

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